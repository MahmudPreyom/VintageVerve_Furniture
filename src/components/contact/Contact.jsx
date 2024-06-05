import { FaFacebook, FaTelegram, FaVoicemail, FaWhatsapp } from "react-icons/fa"

function Contact() {
  return (
    <div>
      <div className="hero min-h-screen bg-orange-300">
        <div className="hero-content flex-col lg:flex-row">
          <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
          <div className=" bg-orange-200 p-4 rounded">
            <h1 className="text-5xl font-bold">Contact Us</h1>
            <p className="py-6">You can email us to know about our furniture or contact us to know any other information through these links.</p>
            <div className="grid grid-cols-2 gap-4">
              <button className="btn btn-warning  flex items-center space-x-2">
                <i className="fab fa-facebook-f"> <FaFacebook/></i>
                <span>Facebook</span>
              </button>
              <button className="btn btn-warning flex items-center space-x-2">
                <i className="fas fa-envelope"> <FaVoicemail/> </i>
                <span>Email</span>
              </button>
              <button className="btn btn-warning flex items-center space-x-2">
                <i className="fab fa-whatsapp"> <FaWhatsapp/> </i>
                <span>WhatsApp</span>
              </button>
              <button className="btn btn-warning flex items-center space-x-2">
                <i className="fab fa-telegram-plane"> <FaTelegram/> </i>
                <span>Telegram</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hero min-h-screen bg-orange-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Send Mail</h1>
            <p className="py-6">You can email us to know about our furniture or contact us to know any other information through up the links.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea name="message" placeholder="message" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-warning">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact