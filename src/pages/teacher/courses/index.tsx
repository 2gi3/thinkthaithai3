// import { DatabaseCourse } from '@/types';
// import styles from '../../courses/courses.module.scss'
// import Link from "next/link";

// export const getStaticProps = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASIC_URL}/api/courses`, {
//         method: "GET",
//     });
//     const courses: DatabaseCourse[] = await res.json();

//     return { props: { courses }, revalidate: 60 };
// };

export default function TeacherCourses(
    // { courses }: { courses: DatabaseCourse[] }
) {
    return (
        <h1>hello</h1>
        //         <div className={styles.container}>
        //             <header>
        //                 <h1>
        //                     The&nbsp;best&nbsp;time to&nbsp;start&nbsp;learning is&nbsp;Now!
        //                 </h1>
        //             </header>
        //             <main>
        //                 <div>
        //                     <Link href={`${process.env.NEXT_PUBLIC_BASIC_URL}/teacher/courses/create`}>
        //                         Create new course
        //                     </Link>
        //                 </div>
        //                 {courses.map((course: DatabaseCourse) => (
        //                     <Link href={`${process.env.NEXT_PUBLIC_BASIC_URL}/teacher/courses/${course._id}`} key={course._id}>
        //                         <div className={styles.course}>
        //                             <h3>
        //                                 {course.title}
        //                             </h3>
        //                             <p className={styles.price}>{course.status}</p>
        //                             <p>{course.description}</p>
        //                             <div className={styles.footer}>
        //                                 <p>Level: <span>{course.level}</span></p>
        //                                 <p>commitment: <span>15 minutes/day, 1 month</span></p>
        //                             </div>
        //                         </div>
        //                     </Link>
        //                 ))}
        //             </main>
        //         </div>
    );
}
