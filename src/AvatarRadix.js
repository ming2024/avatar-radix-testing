import * as AvatarPrimitive from "@radix-ui/react-avatar";

function AvatarRadix({ src, alt }) {
  return (
    <AvatarPrimitive.Root>
      <AvatarPrimitive.Image src={src} alt={alt} />
    </AvatarPrimitive.Root>
  );
}

export default AvatarRadix;
