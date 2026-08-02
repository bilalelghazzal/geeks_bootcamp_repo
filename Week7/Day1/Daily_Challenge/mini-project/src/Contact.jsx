function Contact(){ 
    return(
        <footer className="py-4 bg-gray-100 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 text-center">Contact US</h1>
            <p className="text-start">Have u any question ? </p>
            <nav>
                <div>

                <p>have any question send us message we would be happy to help </p>

                <div className="flex flex-col items-end w-full max-w-md ml-auto space-y-3 mt-2">
                <input type="text" placeholder="Enter your email" className="w-full border border-gray-300 rounded-md px-3 py-2" />
                <textarea rows="5" placeholder="Enter your message" className="w-full border border-gray-300 rounded-md px-3 py-2 resize-none" />
                <button className="w-full rounded-full bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:bg-orange-600">Send Message</button>
                </div>

                </div>
            </nav>
        </footer>
    )
}

export default Contact;