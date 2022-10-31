import React from "react";
import rectangle_40 from '../rectangle_40.jpg';






const AboutPage = () => {


    return (
       <div className="abaut_box"> 
        <div className="abaut_p">
        <p>
            О компании
        </p>
            <p >
            Мы успели поработать более чем с 300 интернет-проектами и я могу со 100% уверенностью заявить -
            будете следить за этими показателями хотя бы в еженедельном формате - сохраните компанию и увеличите прибыль в 10 раз!<br />
            Чтобы понимать окупаемость своей рекламы в условиях санкций и кризиса, 
            а это как раз определяет будет дальше жить ваш бизнес или нет, нужно отслеживать 5 критических показателей.
            </p>
        </div>
        <div className="abaut_img">
            <img src={rectangle_40} className="imeges" alt="imeges" />
        </div>
       </div>
      

    );
};

export default AboutPage;