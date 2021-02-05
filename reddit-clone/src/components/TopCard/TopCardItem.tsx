interface TopCardItemProps {
  icon: React.ReactNode;
  text: string;
}

export function TopCardItem(props: TopCardItemProps) {
  return (
    <div className="rounded-full py-1 px-6 font-bold bg-gray-100 text-blue-500 cursor-pointer select-none hover:bg-gray-200 flex">
      {props.icon} {props.text}
    </div>
  );
}
