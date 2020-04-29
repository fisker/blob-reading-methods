export default function stream() {
  return new Response(this).body
}
