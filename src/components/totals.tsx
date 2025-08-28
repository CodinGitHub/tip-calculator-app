import { TotalItem, Button } from '../components'

export const Totals = () => {
  return (
    <div className='bg-Green-900 rounded-[15px] py-6 px-8 text-White lg:w-[413px] lg:flex lg:flex-col lg:justify-between'>
      <div>
        <TotalItem text='Tip Amount' value={0} />
        <TotalItem text='Total' value={32.79} />
      </div>
      <Button text='Reset' />
    </div>
  )
}
