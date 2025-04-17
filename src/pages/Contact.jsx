

export default function ContactPage() {
    return (
        <main>
            <div className="contactDiv">
                <div>
                    <h1>Contact Me</h1>
                    <h2>*FORM DOES NOT WORK YET*</h2>
                </div>
                <form>
                    <div className="mb-3 d-flex flex-column contactI">
                        <label for="name" className="form-label">Name</label>
                        <input type="text" className="form-text " id="name" name="name" required></input>
                    </div>
                    <div className="mb-3 d-flex flex-column contactI">
                        <label for="email" className="form-label">Email</label>
                        <input type="email" className="form-text " id="email" name="email" required></input>
                    </div>
                    <div className="mb-3 d-flex flex-column contactI">
                        <label for="message" className="form-label">Message</label>
                        <textarea id="message" className="form-text " name="message" required></textarea>
                    </div>
                    <div>
                        <button className="contactS" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </main>
    );
}