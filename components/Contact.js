import { useFormik } from 'formik'
import * as Yup from 'yup'

const SvgContact = {
    Linkedin: <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-linkedin text-black/60 /50 dark:hover:text-secoundary hover:text-secoundary " viewBox="0 0 16 16">
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
    </svg> ,
    Instagram : <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-instagram text-black/60 /50 dark:hover:text-secoundary hover:text-secoundary " viewBox="0 0 16 16">
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
    </svg> ,
    Github : <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className=" text-black/60 /50 dark:hover:text-secoundary hover:text-secoundary  " viewBox="0 0 24 24">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg> ,
    Tiktok:<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-tiktok text-black/60 /50 dark:hover:text-secoundary hover:text-secoundary  " viewBox="0 0 16 16">
    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
    </svg>    
    }



const Contact = () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName:'',
            email:'',
            subject:"",
            message:''
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(15 , 'Must be less than 15 character').required('Required'),
            lastName: Yup.string().max(20, 'Must be less than 20 character').required("Required"),
            email: Yup.string().email('invalid email').required('Required'),
            subject: Yup.string().max(100, "Must be less than 30 character").required('Required'),
            message: Yup.string().max(350, 'Must be less than 350 character').required('Required')
        }),
        onSubmit: (values)=>{
            console.log(values);
        }
    })
    console.log(formik.touched);

    return (
    <div id='contact' className='md:flex justify-around py-20  '>
      <div className='md:w-full max-w-md mt-8 mx-auto mb-20 md:mx-4 w-[300px] '> 
          <h1 className='text-3xl font-bold md:border-l-4 mx-auto pl-2 my-5  text-secoundary md:text-left text-center border-secoundary w-[200px] md:w-full'>Contact Us</h1>
          <p className=' text-black/70  md:text-left text-center my-10  '>We would love to hear from you! If you have any questions or comments, please feel free to reach out to us using the contact information below. We are always happy to chat and help in any way we can. </p>
          <p className=' text-black/70  md:text-left text-center my-10  '>Alternatively, you can fill out the form on this page and we will get back to you as soon as possible.
                Thank you for visiting our website and we look forward to connecting with you! </p>
         <div className='flex flex-row justify-center my-12 space-x-12'>
          <a href="https://www.linkedin.com/company/morocoder/">{SvgContact.Linkedin}</a>
          <a href="https://www.instagram.com/morocoders/" target='_blank' rel='noreferrer'>{SvgContact.Instagram}</a>
          <a href="/">{SvgContact.Github}</a>
          <a href="https://www.tiktok.com/@morocoder">{SvgContact.Tiktok}</a>
         </div>
      </div>
       
      <div className='md:w-full max-w-md mx-auto px-4 md:mx-4'>
      <form className=""
        onSubmit={formik.handleSubmit}
      >
          <div className='flex justify-between'>
              <div className='flex flex-col w-1/2'>
                  <label className=' text-black my-1 flex text-right'>First name</label>
                  <input type="text" placeholder='' className='mr-3  text-black  focus:text-black focus:outline-none bg-white py-3 px-4 mb-3 rounded-md border border-secoundary' 
                        id='firstName' name='firstName' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstName}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? <p className='text-red-600'>{formik.errors.firstName}</p> : null}

              </div>
              <div className='flex flex-col w-1/2'>
                  <label className=' text-black my-1 flex text-right '>Last name</label>
                  <input type="text" placeholder='' className='dark:bg-lightBG bg-whiteColor/80  text-black  focus:outline-none  py-3 px-4 mb-3 rounded-md border border-secoundary' 
                        id='lastName' name='lastName' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastName}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? <p className='text-red-600'>{formik.errors.lastName}</p> : null}
              </div>
          </div>
          <div className='flex flex-col'>
              <label className=' text-black my-1 flex text-right '>Email</label>
              <input type=  "email" placeholder='' className='  text-black  focus:text-black rounded-md border border-secoundary focus:outline-none focus:bg-white py-3 px-4 mb-3 ' 
                    id='email' name='email' onChange={formik.handleChange} value={formik.values.email}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? <p className='text-red-600'>{formik.errors.email}</p> : null}
          </div>
          <div className='flex flex-col'>
            <label htmlFor="subject" className=' text-black my-1 flex text-right'>
                Subject
            </label>
            <input type="text"
            className='  text-black  focus:text-black border border-secoundary focus:outline-none bg-white py-3 px-4 mb-3 rounded-md'
            id='subject' name='subject' onChange={formik.handleChange} value={formik.values.subject}
            onBlur={formik.handleBlur}>
            </input>
            {formik.touched.subject && formik.errors.subject ? <p className='text-red-600'>{formik.errors.subject}</p>: null }
          </div>
          <div className="">
              <label className=" text-black my-1 flex text-right" htmlFor="grid-password">
                  Message
              </label>
              <textarea
                  className=" no-resize w-full text-black  rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none border border-secoundary h-48 "
                  id="message" name='message' onChange={formik.handleChange} value={formik.values.message}
                  onBlur={formik.handleBlur}
              ></textarea>
                {formik.touched.message && formik.errors.message ? <p className='text-red-600'>{formik.errors.message}</p> : null}
          </div>
         <div className='flex justify-start pb-5 my-3'>
         <button type='submit' className='w-full h-[40px] capitalize rounded-lg font-bold text-white bg-secoundary'>submit</button>
         </div>
  
      </form>
      </div>
    
    </div>
  )
}

export default Contact