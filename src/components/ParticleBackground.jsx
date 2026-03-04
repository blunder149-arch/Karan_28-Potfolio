import { useEffect, useRef } from 'react'

const ParticleBackground = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let animationId
        let mouse = { x: -1000, y: -1000 }
        let time = 0

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        resize()
        window.addEventListener('resize', resize)

        // ============ NODES (connection points) ============
        const nodeCount = Math.min(60, Math.floor((window.innerWidth * window.innerHeight) / 20000))
        const nodes = []

        for (let i = 0; i < nodeCount; i++) {
            nodes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.6,
                vy: (Math.random() - 0.5) * 0.6,
                radius: Math.random() * 2 + 1,
                baseOpacity: Math.random() * 0.4 + 0.2,
                pulseSpeed: Math.random() * 0.02 + 0.01,
                pulseOffset: Math.random() * Math.PI * 2,
                color: ['#10b981', '#06d6a0', '#34d399', '#6ee7b7'][Math.floor(Math.random() * 4)],
            })
        }

        // ============ SHOOTING LINES (space lines) ============
        const shootingLines = []
        const maxShootingLines = 8

        const createShootingLine = () => {
            const side = Math.floor(Math.random() * 4) // 0=top, 1=right, 2=bottom, 3=left
            let x, y, angle

            switch (side) {
                case 0: // from top
                    x = Math.random() * canvas.width
                    y = -20
                    angle = Math.PI / 2 + (Math.random() - 0.5) * 0.8
                    break
                case 1: // from right
                    x = canvas.width + 20
                    y = Math.random() * canvas.height
                    angle = Math.PI + (Math.random() - 0.5) * 0.8
                    break
                case 2: // from bottom
                    x = Math.random() * canvas.width
                    y = canvas.height + 20
                    angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.8
                    break
                default: // from left
                    x = -20
                    y = Math.random() * canvas.height
                    angle = (Math.random() - 0.5) * 0.8
                    break
            }

            const speed = Math.random() * 3 + 2
            const length = Math.random() * 120 + 60

            return {
                x, y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                length,
                opacity: Math.random() * 0.4 + 0.2,
                color: ['#10b981', '#06d6a0', '#34d399'][Math.floor(Math.random() * 3)],
                width: Math.random() * 1.5 + 0.5,
                alive: true,
            }
        }

        // Initialize some shooting lines
        for (let i = 0; i < 4; i++) {
            shootingLines.push(createShootingLine())
        }

        // ============ FLOATING GEOMETRIC SHAPES ============
        const shapes = []
        const shapeCount = Math.min(6, Math.floor(window.innerWidth / 250))

        for (let i = 0; i < shapeCount; i++) {
            shapes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 40 + 25,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.008,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                sides: [3, 4, 5, 6][Math.floor(Math.random() * 4)],
                opacity: Math.random() * 0.08 + 0.03,
            })
        }

        // ============ DRAW FUNCTIONS ============

        const drawNode = (node) => {
            const pulse = Math.sin(time * node.pulseSpeed + node.pulseOffset) * 0.3 + 0.7
            const opacity = node.baseOpacity * pulse

            // Glow effect
            const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 4)
            gradient.addColorStop(0, node.color + Math.floor(opacity * 60).toString(16).padStart(2, '0'))
            gradient.addColorStop(1, 'transparent')
            ctx.beginPath()
            ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2)
            ctx.fillStyle = gradient
            ctx.fill()

            // Core dot
            ctx.beginPath()
            ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
            ctx.fillStyle = node.color
            ctx.globalAlpha = opacity
            ctx.fill()
            ctx.globalAlpha = 1
        }

        const drawConnections = () => {
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x
                    const dy = nodes[i].y - nodes[j].y
                    const dist = Math.sqrt(dx * dx + dy * dy)

                    if (dist < 180) {
                        const opacity = 0.12 * (1 - dist / 180)

                        // Animated dash pattern
                        ctx.beginPath()
                        ctx.setLineDash([4, 6])
                        ctx.lineDashOffset = -time * 0.5
                        ctx.strokeStyle = '#10b981'
                        ctx.globalAlpha = opacity
                        ctx.lineWidth = 0.6
                        ctx.moveTo(nodes[i].x, nodes[i].y)
                        ctx.lineTo(nodes[j].x, nodes[j].y)
                        ctx.stroke()
                        ctx.setLineDash([])
                        ctx.globalAlpha = 1
                    }
                }

                // Mouse connection
                const mdx = mouse.x - nodes[i].x
                const mdy = mouse.y - nodes[i].y
                const mDist = Math.sqrt(mdx * mdx + mdy * mdy)

                if (mDist < 200) {
                    const opacity = 0.25 * (1 - mDist / 200)
                    ctx.beginPath()
                    ctx.strokeStyle = '#34d399'
                    ctx.globalAlpha = opacity
                    ctx.lineWidth = 1
                    ctx.moveTo(nodes[i].x, nodes[i].y)
                    ctx.lineTo(mouse.x, mouse.y)
                    ctx.stroke()
                    ctx.globalAlpha = 1
                }
            }
        }

        const drawShootingLine = (line) => {
            const tailX = line.x - (line.vx / Math.sqrt(line.vx * line.vx + line.vy * line.vy)) * line.length
            const tailY = line.y - (line.vy / Math.sqrt(line.vx * line.vx + line.vy * line.vy)) * line.length

            const gradient = ctx.createLinearGradient(tailX, tailY, line.x, line.y)
            gradient.addColorStop(0, 'transparent')
            gradient.addColorStop(0.6, line.color + '40')
            gradient.addColorStop(1, line.color + 'cc')

            ctx.beginPath()
            ctx.moveTo(tailX, tailY)
            ctx.lineTo(line.x, line.y)
            ctx.strokeStyle = gradient
            ctx.lineWidth = line.width
            ctx.globalAlpha = line.opacity
            ctx.stroke()
            ctx.globalAlpha = 1

            // Bright head glow
            const headGlow = ctx.createRadialGradient(line.x, line.y, 0, line.x, line.y, 6)
            headGlow.addColorStop(0, line.color + '80')
            headGlow.addColorStop(1, 'transparent')
            ctx.beginPath()
            ctx.arc(line.x, line.y, 6, 0, Math.PI * 2)
            ctx.fillStyle = headGlow
            ctx.fill()
        }

        const drawShape = (shape) => {
            ctx.save()
            ctx.translate(shape.x, shape.y)
            ctx.rotate(shape.rotation)
            ctx.beginPath()

            for (let i = 0; i <= shape.sides; i++) {
                const angle = (i / shape.sides) * Math.PI * 2 - Math.PI / 2
                const x = Math.cos(angle) * shape.size
                const y = Math.sin(angle) * shape.size
                if (i === 0) ctx.moveTo(x, y)
                else ctx.lineTo(x, y)
            }

            ctx.closePath()
            ctx.strokeStyle = '#10b981'
            ctx.globalAlpha = shape.opacity
            ctx.lineWidth = 1
            ctx.stroke()
            ctx.globalAlpha = 1
            ctx.restore()
        }

        // ============ HORIZONTAL SCAN LINES ============
        const drawScanLines = () => {
            const scanY = (time * 0.8) % (canvas.height + 200) - 100
            const gradient = ctx.createLinearGradient(0, scanY - 50, 0, scanY + 50)
            gradient.addColorStop(0, 'transparent')
            gradient.addColorStop(0.5, 'rgba(16, 185, 129, 0.03)')
            gradient.addColorStop(1, 'transparent')
            ctx.fillStyle = gradient
            ctx.fillRect(0, scanY - 50, canvas.width, 100)
        }

        // ============ UPDATE & ANIMATE ============

        const update = () => {
            time++

            // Update nodes
            nodes.forEach(node => {
                node.x += node.vx
                node.y += node.vy

                // Mouse repulsion
                const dx = mouse.x - node.x
                const dy = mouse.y - node.y
                const dist = Math.sqrt(dx * dx + dy * dy)
                if (dist < 150) {
                    node.x -= dx * 0.015
                    node.y -= dy * 0.015
                }

                // Wrap around edges
                if (node.x < -20) node.x = canvas.width + 20
                if (node.x > canvas.width + 20) node.x = -20
                if (node.y < -20) node.y = canvas.height + 20
                if (node.y > canvas.height + 20) node.y = -20
            })

            // Update shooting lines
            shootingLines.forEach((line, i) => {
                line.x += line.vx
                line.y += line.vy

                // Check if out of bounds
                if (line.x < -200 || line.x > canvas.width + 200 ||
                    line.y < -200 || line.y > canvas.height + 200) {
                    shootingLines[i] = createShootingLine()
                }
            })

            // Occasionally add new shooting lines
            if (shootingLines.length < maxShootingLines && Math.random() < 0.008) {
                shootingLines.push(createShootingLine())
            }

            // Update geometric shapes
            shapes.forEach(shape => {
                shape.x += shape.vx
                shape.y += shape.vy
                shape.rotation += shape.rotationSpeed

                if (shape.x < -60) shape.x = canvas.width + 60
                if (shape.x > canvas.width + 60) shape.x = -60
                if (shape.y < -60) shape.y = canvas.height + 60
                if (shape.y > canvas.height + 60) shape.y = -60
            })
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Draw layers back to front
            drawScanLines()
            shapes.forEach(drawShape)
            drawConnections()
            nodes.forEach(drawNode)
            shootingLines.forEach(drawShootingLine)

            update()
            animationId = requestAnimationFrame(animate)
        }

        const handleMouseMove = (e) => {
            mouse.x = e.clientX
            mouse.y = e.clientY
        }

        const handleMouseLeave = () => {
            mouse.x = -1000
            mouse.y = -1000
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseleave', handleMouseLeave)
        animate()

        return () => {
            window.removeEventListener('resize', resize)
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseleave', handleMouseLeave)
            cancelAnimationFrame(animationId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 0,
                pointerEvents: 'none',
            }}
        />
    )
}

export default ParticleBackground
