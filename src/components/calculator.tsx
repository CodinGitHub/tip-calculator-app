import { Input, PercentButton, Totals } from '../components'

const percents: number[] = [5, 10, 15, 25, 50];

export const Calculator = () => {
  return (
    <div className='bg-White p-8 w-[375px] m-auto rounded-[25px] my-10 md:w-[608px] md:py-12 md:px-20 lg:flex lg:w-[920px] lg:gap-12 lg:p-8'>
      <div className='lg:flex-1'>
        <Input iconUrl='/images/icon-dollar.svg' label='Bill' value={0} />
        <h2 className='font-bold text-Grey-500 mb-2'>Select Tip %</h2>
        <div className='grid grid-cols-2 gap-4 mb-8'>
          {
            percents.map((percent:number) => <PercentButton key={percent} percent={percent} />)
          }
          <PercentButton isCustom percent={0} />
        </div>
        <Input iconUrl='/images/icon-person.svg' label='Number of People' value={0} />
      </div>

      <Totals />
    </div>
  )
}
