

const Contact = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold ">Contact Us </h1>

            <form className="flex flex-col">
                <label>Name : <input type="text" placeholder="Name" /></label>
                <label>Message : <input type="text" placeholder="Message" /></label>
                <button className="py-2 px-3 rounded-md bg-black text-white">Submit</button>
            </form>
        </div>
    )
}
export default Contact;