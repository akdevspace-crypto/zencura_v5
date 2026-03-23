from PIL import Image, ImageOps

def remove_bg(path):
    print(f"Processing {path}...")
    img = Image.open(path).convert("RGBA")
    
    # Invert the luminance channel to use as the alpha mask
    l = img.convert("L")
    alpha = ImageOps.invert(l)
    
    # Reconstruct the image using solid black for RGB and the new alpha
    black = Image.new('L', img.size, color=0)
    img_transparent = Image.merge('RGBA', (black, black, black, alpha))
    
    # Save over the original
    img_transparent.save(path, "PNG")

files = [
    "public/vintage_mortar.png",
    "public/vintage_stethoscope.png",
    "public/vintage_botanical.png",
    "public/vintage_bottle.png"
]

for f in files:
    try:
        remove_bg(f)
    except Exception as e:
        print(f"Error processing {f}: {e}")

print("Done.")
