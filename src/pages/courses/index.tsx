import { DatabaseCourse } from '@/types';
import styles from './courses.module.scss'
import Link from "next/link";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export default function About({ courses }: { courses: DatabaseCourse[] }) {

  const dispatch = useDispatch();
  const studentData = useSelector(
    (state: RootState) => state.student
  );
  console.log(studentData.startedCourses)
  return (
    <div className={styles.container}>
      <header>
        <h1>
          The&nbsp;best&nbsp;time to&nbsp;start&nbsp;learning is&nbsp;Now!
        </h1>
      </header>
      <main>
        {courses.map((course: DatabaseCourse) => (
          <Link href={`http://localhost:3000/courses/${course._id}`} key={course._id}>
            <div className={styles.course}>
              <h3>
                {course.title}
              </h3>
              {studentData.startedCourses?.hasOwnProperty(course._id)
                ? <p className={styles.started}>{
                  studentData.startedCourses?.[course._id].length
                } / {
                    course.lessons.length
                  } </p>
                : <p className={styles.price}>{course.status}</p>

              }

              <p>{course.description}</p>
              <div className={styles.footer}>
                <p>Level: <span>{course.level}</span></p>
                <p>commitment: <span>15 minutes/day, 1 month</span></p>
              </div>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}



export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/courses", {
    method: "GET",
  });
  const courses: DatabaseCourse[] = await res.json();

  return { props: { courses }, revalidate: 60 };
};