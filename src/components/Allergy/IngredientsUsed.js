import React from "react";
import QrCode from "../qrcode/QrCode";
import "./IngredientsUsed.css";
import { MdOutlinePhoneAndroid } from "react-icons/md";

const IngredientsUsed = () => {
  return (
    <div className="ingredientsUsed">
      <div>
        <h2 style={{ fontSize: "40px" }}>
          <span style={{ color: "#D95103" }}>Ingredient's</span> Used
        </h2>
      </div>
      <div className="ingerdientItems">
        <div className="backgroundHerbal">
          <div className="forDough">
            <div className="h5AndforDough">
              <h5>For the Dough</h5>
              <ul>
                <li>120gms refined floor</li>

                <li>1/4 tsp baking powder</li>

                <li>1/2 tsp salt water (for kneading)</li>
              </ul>
            </div>
          </div>

          <div className="forDough">
            <div className="h5AndforDough">
              <h5>For the Chicken Fillings</h5>
              <ul>
                <li>1 cup chicken (minced)</li>

                <li>1/2 cup onions, finely chopped</li>

                <li>1/4 tsp black pepper powder</li>

                <li>1 tbsp oil</li>

                <li>1/2 tsp garlic paste</li>
                <li>1/2 tsp soya sauce</li>
                <li>Salt</li>
                <li>1/4 tsp vinegar</li>
              </ul>
            </div>
          </div>

          <div className="forDough">
            <div className="h5AndforDough">
              <h5>For the Vegetable Fillings</h5>
              <ul>
                <li>1 cup cabbage and carrots, grated</li>

                <li>2 tbsp onions , finely chopped</li>

                <li>1/2 tsp garlic, finely chopped</li>

                <li>1 tbsp oil</li>

                <li>1/4 tsp vinegar</li>
                <li>1/2 tsp soya sauce</li>
                <li>to taste salt</li>
                <li>to taste pepper</li>
                <li>1 tbsp cornflour</li>
              </ul>
            </div>
          </div>

          <div className="forDough">
            <div className="h5AndforDough">
              <h5>For Chilli Sauce</h5>
              <ul>
                <li>25 gram garlic, peeled</li>
                <li>6 gms whole red chillies</li>
                <li>3 tbsp vinegar</li>
                <li>3 tbsp vinegar</li>
                <li>1 tbsp oil</li>
                <li>to taste salt</li>
                <li>to taste sugar</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div style={{marginBottom:'50px'}}>
          <div>
          
        <h2 style={{ fontSize: "40px" }}>
          <span style={{ color: "#D95103" }}>Allergy</span> Advice
        </h2>
          </div>
          <div>
              <p style={{marginTop:'50px', textAlign:'left'}}>
              Lorem ipsum dolor sit amet consectetur. Feugiat lectus sit est blandit in gravida. Nisl facilisis luctus sit porttitor placerat purus tincidunt. Cursus nascetur a mauris odio quis sociis pretium nisl. In viverra diam dis montes orci congue vulputate magna ullamcorper. Semper tellus ipsum felis maecenas ultrices turpis amet euismod malesuada. Amet sed neque vitae malesuada quis sed urna.<br/><br/>

Feugiat orci feugiat cursus risus tincidunt. Aliquet nam iaculis bibendum tortor varius sit. Volutpat nunc nisl quisque elit. Ac est ultricies risus et sed. Donec auctor tristique quam morbi pellentesque et. Scelerisque dui id arcu laoreet iaculis nunc et nulla sed. Aliquet nullam vulputate quis ut mi placerat auctor. Ipsum massa suspendisse netus mollis interdum.<br/><br/>

Augue leo eget ut vitae maecenas ac. Metus massa nunc tristique donec dignissim aenean congue justo et. Parturient elit adipiscing non vitae mattis. Congue senectus urna cursus nisi nisl nisl tincidunt rhoncus. Congue sit etiam vestibulum elit aenean leo enim volutpat. Aliquet vitae condimentum bibendum ullamcorper vel cursus libero netus bibendum. Lorem id ut proin tincidunt. Nibh nunc amet odio est et. Sem dui nunc morbi leo quisque viverra ultrices. Mattis at tempus ultricies ut feugiat nunc dignissim. Urna turpis purus turpis elit risus..<br/><br/>

Sed elit ornare senectus dignissim diam dolor sed dictum. Faucibus mauris senectus odio blandit diam nunc. Urna volutpat ut potenti ut mus orci neque sem. Mattis amet at amet faucibus nisl morbi aenean ac. Justo turpis bibendum donec lacinia. Enim integer ornare nibh urna enim tortor arcu sit lacinia. Dapibus praesent vitae dolor cursus fringilla hac facilisis pellentesque. Elementum lacus varius et neque amet aliquam donec sed. Ultrices euismod commodo id vehicula commodo. Amet lorem eros nulla mauris. Sit arcu enim sit nunc mi sed aenean. Ornare enim vitae volutpat est dui tortor. Viverra habitant et consequat vitae elit aliquet iaculis in tristique..<br/><br/>

Quam ipsum viverra ac laoreet platea in praesent. Mattis molestie arcu nulla convallis interdum proin dui ut porta. Amet potenti praesent pulvinar scelerisque vitae habitant eget. Senectus hac id aliquam ipsum urna. Est ut amet nec sollicitudin nunc viverra nec ipsum suspendisse. Etiam risus ultricies dictum nisl. Bibendum ultrices elementum feugiat erat suspendisse mi fermentum magna suspendisse. Nisi mattis consequat nec donec eu amet nulla a. At blandit vulputate morbi tortor amet. Hac nec gravida tempor ac. Senectus nunc libero scelerisque quisque. Risus condimentum mattis massa integer.
              </p>
          </div>
      </div>

      <div className="scanMe">
          <h3 style={{color:'#0C6967'}}>Scan the QR code</h3>
          <p>You can also check the allergy advices using your phone as well</p>
          <br />{" "}
          <div
            className="qrScanner"
            style={{
              justifyContent: "center",
              textAlign: "center",
              alignSelf: "center",
            }}
          >
            <div
              className="qrCode"
              style={{
                height: "175px",
                width: "175px",
                margin: "0 auto",
              }}
            >
              <QrCode />
            </div>
            <h1
              style={{
                fontWeight: "700",
                fontSize: "31px",
                lineHeight: "120%",
              }}
            >
              <span style={{ color: "#D95103" }}>SCAN </span>ME!
              <MdOutlinePhoneAndroid />
            </h1>
          </div>
        </div>
    </div>
  );
};

export default IngredientsUsed;
