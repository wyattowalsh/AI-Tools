# Colab Single-Cell Script: Enhanced Version (Bug Fixed)
# ------------------------------------------------------
# This script generates an upgraded, uniquely stylized SVG logo for 
# "AI Tools Guide" using the svgwrite library. It incorporates advanced 
# design touches such as dual gradients, a soft background wash, subtle 
# drop shadows, and refined geometry to create an iconic, modern, and 
# visually impactful mark.

!pip install svgwrite

import svgwrite

def generate_ai_tools_guide_logo_svg(filename="ai_tools_guide_logo_enhanced.svg"):
    """
    Generates an enhanced, iconic SVG logo for 'AI Tools Guide'.

    Key Design Enhancements:
    ------------------------
    1. Soft radial background gradient to give a polished aesthetic.
    2. Refined, stylized 'A' shape with metallic-like gradient fill.
    3. Open book arcs at the base with a secondary radial gradient.
    4. Additional circuit node pattern for a futuristic/tech feel.
    5. Translucent polygon overlay with a two-stop linear gradient.
    6. Subtle drop-shadow effects on major elements for depth.
    7. Balanced, modern composition suitable for branding at all scales.
    """

    # Overall dimensions (px). The viewBox allows scaling at any size.
    width, height = 240, 240
    dwg = svgwrite.Drawing(
        filename=filename,
        size=(f"{width}px", f"{height}px"),
        profile='full',
        viewBox=f"0 0 {width} {height}"
    )

    # --------------------------------------------------------
    # 1. Define Gradients & Filters
    # --------------------------------------------------------

    # Background Gradient: Radial
    bg_grad_id = "BackgroundRadial"
    bg_radial_gradient = dwg.radialGradient(
        id=bg_grad_id,
        center=("50%", "50%"),
        r="65%"
    )
    # Soft fade from very light gray to white
    bg_radial_gradient.add_stop_color(offset='0%',   color='#F2F2F2', opacity=1.0)
    bg_radial_gradient.add_stop_color(offset='100%', color='#FFFFFF', opacity=1.0)
    dwg.defs.add(bg_radial_gradient)

    # Gradient 1: Linear (Blue -> Orange) for overlay polygon
    gradient_id_1 = "BlueOrangeGradient"
    linear_gradient_1 = dwg.linearGradient(
        start=('0%', '0%'), 
        end=('100%', '100%'), 
        id=gradient_id_1
    )
    linear_gradient_1.add_stop_color(offset='0%',   color='#00B4F2', opacity=1.0)  # Vibrant Blue
    linear_gradient_1.add_stop_color(offset='100%', color='#F2A900', opacity=1.0)  # Warm Orange
    dwg.defs.add(linear_gradient_1)

    # Gradient 2: Radial for Book Arcs
    gradient_id_2 = "BookArcRadial"
    radial_gradient_2 = dwg.radialGradient(
        id=gradient_id_2,
        center=("50%", "50%"), 
        r="75%"
    )
    radial_gradient_2.add_stop_color(offset='0%',   color='#E9E9E9', opacity=0.8)
    radial_gradient_2.add_stop_color(offset='100%', color='#FFFFFF', opacity=0.8)
    dwg.defs.add(radial_gradient_2)

    # Gradient 3: Subtle fill for the 'A' shape
    gradient_id_3 = "AShapeGradient"
    linear_gradient_3 = dwg.linearGradient(
        start=('0%', '0%'), 
        end=('0%', '100%'), 
        id=gradient_id_3
    )
    # A subtle shift from near-white to a very light gray, for a metallic sheen
    linear_gradient_3.add_stop_color(offset='0%',   color='#F8F8F8', opacity=1.0)
    linear_gradient_3.add_stop_color(offset='100%', color='#DADADA', opacity=1.0)
    dwg.defs.add(linear_gradient_3)

    # Define a drop-shadow filter (Fixing the feMerge usage)
    filter_id = "dropShadow"
    drop_shadow_filter = dwg.filter(
        id=filter_id, 
        x="-20%", 
        y="-20%", 
        width="140%", 
        height="140%"
    )
    drop_shadow_filter.feGaussianBlur(in_='SourceAlpha', stdDeviation=2, result='blur')
    drop_shadow_filter.feOffset(in_='blur', dx=2, dy=2, result='offsetBlur')
    # Correctly merge the blurred offset with the original graphic
    drop_shadow_filter.feMerge(layernames=['offsetBlur', 'SourceGraphic'])
    dwg.defs.add(drop_shadow_filter)

    # --------------------------------------------------------
    # 2. Background Rectangle with Soft Radial Gradient
    # --------------------------------------------------------
    # Subtle background to unify the composition
    dwg.add(dwg.rect(
        insert=(0, 0),
        size=(width, height),
        fill=f"url(#{bg_grad_id})"
    ))

    # --------------------------------------------------------
    # 3. Stylized 'A' Shape with Partial Gradient Fill
    # --------------------------------------------------------
    A_shape_coords = [
        (60,  200),  # Left foot
        (120,  20),  # Apex
        (180, 200)   # Right foot
    ]
    A_shape_polygon = dwg.polygon(
        points=A_shape_coords,
        fill=f"url(#{gradient_id_3})",  # Metallic gradient fill
        stroke="black",
        stroke_width=3,
        stroke_linecap="round",
        stroke_linejoin="round",
        filter=f"url(#{filter_id})"  # Apply subtle drop shadow
    )
    dwg.add(A_shape_polygon)

    # Crossbar
    crossbar = dwg.line(
        start=(85, 110),
        end=(155, 110),
        stroke="black",
        stroke_width=3,
        stroke_linecap="round",
        filter=f"url(#{filter_id})"  # Slight shadow for consistency
    )
    dwg.add(crossbar)

    # --------------------------------------------------------
    # 4. Open Book Arcs (Bottom) with Radial Gradient
    # --------------------------------------------------------
    book_arcs = dwg.path(
        d=(
            "M 60,200 "
            "C 80,160 100,160 120,200 "
            "C 140,160 160,160 180,200"
        ),
        fill="none",
        stroke=f"url(#{gradient_id_2})",  # Radial gradient for subtle highlight
        stroke_width=3,
        stroke_linecap="round",
        filter=f"url(#{filter_id})"
    )
    dwg.add(book_arcs)

    # --------------------------------------------------------
    # 5. Futuristic Circuit Nodes & Connectors
    # --------------------------------------------------------
    circuit_points = [
        (80,  160),
        (95,  140),
        (110, 120),
        (130,  95),
        (150,  75),
        (165,  55)
    ]

    # Draw nodes
    for (cx, cy) in circuit_points:
        dwg.add(dwg.circle(
            center=(cx, cy),
            r=4,
            fill="black",
            filter=f"url(#{filter_id})"
        ))

    # Connect nodes with lines
    for i in range(len(circuit_points) - 1):
        x1, y1 = circuit_points[i]
        x2, y2 = circuit_points[i + 1]
        dwg.add(dwg.line(
            start=(x1, y1),
            end=(x2, y2),
            stroke="black",
            stroke_width=2,
            stroke_linecap="round",
            filter=f"url(#{filter_id})"
        ))

    # --------------------------------------------------------
    # 6. Geometric Overlay (Polygon) with Blue-Orange Gradient
    # --------------------------------------------------------
    overlay_points = [
        (110, 60),
        (130, 50),
        (170, 100),
        (140, 170),
        (100, 170),
        (70,  100)
    ]
    overlay_polygon = dwg.polygon(
        points=overlay_points,
        fill=f"url(#{gradient_id_1})",  # Blue -> Orange gradient
        fill_opacity=0.35,
        stroke="none",
        filter=f"url(#{filter_id})"  # Apply subtle drop shadow
    )
    dwg.add(overlay_polygon)

    # --------------------------------------------------------
    # 7. Save the SVG File
    # --------------------------------------------------------
    dwg.save()

if __name__ == "__main__":
    # Generate the enhanced logo and write to 'ai_tools_guide_logo_enhanced.svg'
    generate_ai_tools_guide_logo_svg("ai_tools_guide_icon.svg")
    print("Enhanced SVG logo generated: 'ai_tools_guide_logo_enhanced.svg'")
