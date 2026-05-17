import { PortableText as PortableTextComponent } from '@portabletext/react'

export default function PortableText({ value }: { value: any }) {
  return (
    <div class="prose prose-lg max-w-none">
      <PortableTextComponent value={value} />
    </div>
  )
}
