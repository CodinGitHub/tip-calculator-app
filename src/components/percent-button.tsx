interface Props {
  percent: number;
  isCustom?: boolean;
}
export const PercentButton = ({percent, isCustom = false}:Props) => {

  const styles = isCustom
    ? 'bg-Grey-200 text-Grey-500 hover:bg-Grey-50'
    : 'bg-Green-900 text-Grey-50 hover:bg-Green-200 hover:text-Green-900'

  return (
    <button 
      className={`transition-colors text-2xl font-bold rounded-[5px] w-full h-12 cursor-pointer ${styles}`}
      >
        {
          isCustom ? 'Custom' : `${percent}%`
        }
      </button>
  )
}