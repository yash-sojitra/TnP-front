export default function Button({children}){
    return (
        <>
            <button className="bg-[#1E40AF] text-1xl rounded-xl text-[#FAFAFA] px-6 py-2">
                {children}
            </button>
        </>
    )
}