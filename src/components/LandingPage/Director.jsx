import DirectorImg from '../../assets/Director.png';
export default function Director(){
    return (
        <div className='my-[4.5rem] bg-[#172554]'>
            <div className="bg-[#172554] mx-40 py-16 flex ">
                <div >
                    <img src={DirectorImg}  alt="director" className='object-cover ' />
                </div>
                <div className='ml-24 text-[#DBEAFE] text-justify ' >
                    <div className='py-8 text-[1.2rem] font-medium max-w-[70rem]'>
                        <h1> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga similique iusto corporis doloremque vitae, reiciendis a impedit et magnam nam. Vitae iusto culpa, impedit quibusdam ipsa quisquam aspernatur neque, veritatis maiores blanditiis quia assumenda aliquam praesentium aut, accusantium recusandae necessitatibus iste debitis optio dicta. Totam blanditiis pariatur exercitationem natus quia Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ipsam! Ea tempore delectus minima amet veritatis magni iure cumque esse? Dolor aliquid perferendis perspiciatis labore velit incidunt autem, ipsum asperiores? Autem assumenda nobis sit inventore eveniet expedita rerum, sed in ipsa exercitationem adipisci possimus labore voluptates unde. Labore, nulla minima!.</h1>
                    </div>
                    <div>
                        <h1 className='text-4xl font-bold'>Prof Rajeev Shorey</h1>
                        <p className='text-2xl'>Director IIIT SURAT</p>
                    </div>
                </div>
            </div>
        </div>
    )
}