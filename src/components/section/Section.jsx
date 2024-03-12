import React from 'react'
import macLaptop from './images/mac-laptop.jpg'
import watch from './images/watch-series5-logo.png'
import appleTv from './images/apple-tv-logo.png'
import appleCard from './images/apple-card-logo.png'
import servent from './images/servant-logo.png'
function Section() {
  return (
<>
     {/* main section */}
    <section className="main-highlight-wrapper">
			<div class="internal-wrapper"> 
				<div class="model">
					16-inch model
				</div>

				<div class="product-title">
					MacBook Pro
				</div>

				<div class="brief-description">
					The best for the brightest.
				</div>

				<div class="links-wrapper">
					<ul>
						<li><a href="">Learn more</a></li>
						<li><a href="">Buy</a></li>
					</ul> 
				</div>

				<div class="main-image-wrapper">
					<img src={macLaptop}/>
				</div>

			</div>
		</section> 

{/* second section */}
        <section className="second-hightlight-wrapper">
        <div className="internal-wrapper">
            <div className="title-wraper">
                iPhone 11 Pro 
            </div> 

            <div className="description-wrapper">
                Pro cameras. Pro display. Pro performance.
            </div>

            <div className="price-wrapper">
                From $24.95/mo. or $599 with trade‑in.
            </div>

            <div className="links-wrapper">
                <ul>
                    <li><a href="">Learn more</a></li>
                    <li><a href="">Buy</a></li>
                </ul> 
            </div>
        </div>
    </section>

{/*             section three */}
    <section class="third-highlight-wrapper">
        <div class="internal-wrapper">
            <div class="title-wraper">
                iPhone 11 
            </div> 
            <div class="description-wrapper">
                Just the right amount of everything.
            </div>
            <div class="price-wrapper">
                From $16.62/mo. or $399 with trade‑in.
            </div>
            <div class="links-wrapper">
                <ul>
                    <li><a href="">Learn more</a></li>
                    <li><a href="">Buy</a></li>
                </ul> 
            </div>
        </div>
    </section>

{/*             section four */}
   <section class="fourth-heghlight-wrapper">
       <div class="left-side-wrapper">
           <div class="top-logo-wrapper">
               <div class="logo-wrapper">
                   <img src={watch}/>
               </div>
           </div>
           <div class="description-wraper">
               With the new Always-On Retina display.<br />
               You’ve never seen a watch like this.
           </div>
           <div class="links-wrapper">
               <ul>
                   <li><a href="">Learn more</a></li>
                   <li><a href="">Buy</a></li>
               </ul> 
           </div>
       </div>
       <div class="right-side-wrapper">
           <div class="top-logo-wrapper">
               <div class="logo-wrapper">
                   <img src={appleCard}/>
               </div>
           </div>
           <div class="description-wraper">
               Get 3% Daily Cash on purchases from Apple using Apple Card.
           </div>
           <div class="links-wrapper">
               <ul>
                   <li><a href="">Learn more</a></li>
                   <li><a href="">Buy</a></li>
               </ul> 
           </div>
         </div>	
     </section>
{/* section five */}
    <section class="fifth-heghlight-wrapper"> 
       <div class="left-side-wrapper">
           <div class="top-logo-wrapper">
               <div class="logo-wrapper">
                   <img src={appleTv}/>
               </div>
           </div>
           <div class="tvshow-logo-wraper">
               <img src={servent}/>
           </div>
             <div class="watch-more-wrapper">
                 <a href="#">Watch the trailer</a>
             </div>
         </div>
         <div class="right-side-wrapper">
             <div class="top-logo-wrapper">
                 <div class="logo-wrapper">
                     AirPods Pro
                 </div>
             </div>
            <div class="description-wraper">
                Magic like you’ve never heard.
            </div>

            <div class="links-wrapper">
                <ul>
                    <li><a href="">Learn more</a></li>
                    <li><a href="">Buy</a></li>
                </ul> 
            </div>
        </div>	
    </section>
            {/* section six
    <section class="sixth-heghlight-wrapper"> 
        <div class="left-side-wrapper">
            <div class="model">
                16-inch model
            </div>
            <div class="product-title-small">
                MacBook Pro
            </div>
           <div class="description-wraper">
               The best for the brightest.
           </div>
            <div class="links-wrapper">
                <ul>
                    <li><a href="">Learn more</a></li>
                    <li><a href="">Buy</a></li>
                </ul> 
            </div>
        </div>
        <div class="right-side-wrapper">
            <div class="top-logo-wrapper">
                <div class="logo-wrapper">
                    <img src="images/icons/new-ipad-logo.png"/>
                </div>
            </div>
         <div class="description-wraper">
             Like a computer. Unlike any computer.
         </div>
            <div class="links-wrapper">
                <ul>
                    <li><a href="">Learn more</a></li>
                    <li><a href="">Buy</a></li>
                </ul> 
            </div>
        </div>	
    </section> */}

</>  
)
}

export default Section;
