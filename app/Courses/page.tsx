import { User, columns } from './columns'
import { DataTable } from '@/components/data-table'
import courseData  from '../CourseID.json'
import inviteLink from '../CourseID.json'

async function getCourseID(): Promise<User[]> {
  return courseData 
}

 async function Page() {
  const data = await getCourseID()

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='mb-6 text-3xl font-bold'>CourseMates: Find your Course ID</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  )
}
  
export default Page 