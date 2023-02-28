import { useNavigate } from "react-router-dom";
 

export default function NewsLetter() {
    const navigate = useNavigate();
    const  navToAbout= () => {
      navigate("/about");
    }

    return (
        <section><h3>Sign Up For Our Newsletter</h3>
            <button onClick={navToAbout}>Sign me up for hourly updates!</button>
        </section>

    );
  };