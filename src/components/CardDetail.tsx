interface Props {
  heading: string
  value: string
}

export default function CardDetail({ heading, value }: Props) {
  return (
    <div className="flex flex-col gap-1 rounded-xl bg-[#3a4c5e] bg-opacity-70 p-2">
      <p className="font-medium">{heading}</p>
      <p className="text-light-gray whitespace-pre-wrap break-words">{value}</p>
    </div>
  )
}
