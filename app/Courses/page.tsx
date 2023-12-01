import { User, columns } from './columns'
import { DataTable } from '@/components/data-table'
import Courseid from '../CourseID.json'

async function getCourseID(): Promise<User[]> {
  return Courseid
}

 async function Page() {
  const data = await getCourseID()

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='mb-6 text-3xl font-bold'>Find your Course ID</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  )
}

export default Page