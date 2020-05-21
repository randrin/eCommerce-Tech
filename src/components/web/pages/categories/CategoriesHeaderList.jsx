import React, { Component } from "react";
import { Translation } from "react-i18next";

export default class CategoriesHeaderList extends Component {
  render() {
    return (
      <Translation>
        {(t) => (
          <>
            <div className="dropdown-menu">
              <nav className="side-nav">
                <ul
                  className="menu-vertical sf-arrows sf-js-enabled"
                  style={{ touchAction: "pan-y" }}
                >
                  <li className="megamenu-container">
                    <a className="sf-with-ul" href="#">
                      <i className="icon-laptop"></i>Electronics
                    </a>
                    <div className="megamenu" style={{ display: "none" }}>
                      <div className="row no-gutters">
                        <div className="col-md-8">
                          <div className="menu-col">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="menu-title">
                                  Laptops &amp; Computers
                                </div>
                                <ul>
                                  <li>
                                    <a href="#">Desktop Computers</a>
                                  </li>
                                  <li>
                                    <a href="#">Monitors</a>
                                  </li>
                                  <li>
                                    <a href="#">Laptops</a>
                                  </li>
                                  <li>
                                    <a href="#">iPad &amp; Tablets</a>
                                  </li>
                                  <li>
                                    <a href="#">Hard Drives &amp; Storage</a>
                                  </li>
                                  <li>
                                    <a href="#">Printers &amp; Supplies</a>
                                  </li>
                                  <li>
                                    <a href="#">Computer Accessories</a>
                                  </li>
                                </ul>
                                <div className="menu-title">TV &amp; Video</div>
                                <ul>
                                  <li>
                                    <a href="#">TVs</a>
                                  </li>
                                  <li>
                                    <a href="#">Home Audio Speakers</a>
                                  </li>
                                  <li>
                                    <a href="#">Projectors</a>
                                  </li>
                                  <li>
                                    <a href="#">Media Streaming Devices</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-6">
                                <div className="menu-title">Cell Phones</div>
                                <ul>
                                  <li>
                                    <a href="#">Carrier Phones</a>
                                  </li>
                                  <li>
                                    <a href="#">Unlocked Phones</a>
                                  </li>
                                  <li>
                                    <a href="#">Phone &amp; Cellphone Cases</a>
                                  </li>
                                  <li>
                                    <a href="#">Cellphone Chargers </a>
                                  </li>
                                </ul>
                                <div className="menu-title">
                                  Digital Cameras
                                </div>
                                <ul>
                                  <li>
                                    <a href="#">Digital SLR Cameras</a>
                                  </li>
                                  <li>
                                    <a href="#">Sports &amp; Action Cameras</a>
                                  </li>
                                  <li>
                                    <a href="#">Camcorders</a>
                                  </li>
                                  <li>
                                    <a href="#">Camera Lenses</a>
                                  </li>
                                  <li>
                                    <a href="#">Photo Printer</a>
                                  </li>
                                  <li>
                                    <a href="#">Digital Memory Cards</a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      Camera Bags, Backpacks &amp; Cases
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="banner banner-overlay">
                            <a
                              href="category.html"
                              className="banner banner-menu"
                            >
                              <img
                                src="assets/images/demos/demo-4/menu/banner-1.jpg"
                                alt="Banner"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="megamenu-container">
                    <a className="sf-with-ul" href="#">
                      <i className="icon-couch"></i>Furniture
                    </a>
                    <div className="megamenu" style={{ display: "none" }}>
                      <div className="row no-gutters">
                        <div className="col-md-8">
                          <div className="menu-col">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="menu-title">Bedroom</div>
                                <ul>
                                  <li>
                                    <a href="#">Beds, Frames &amp; Bases</a>
                                  </li>
                                  <li>
                                    <a href="#">Dressers</a>
                                  </li>
                                  <li>
                                    <a href="#">Nightstands</a>
                                  </li>
                                  <li>
                                    <a href="#">Kids' Beds &amp; Headboards</a>
                                  </li>
                                  <li>
                                    <a href="#">Armoires</a>
                                  </li>
                                </ul>
                                <div className="menu-title">Living Room</div>
                                <ul>
                                  <li>
                                    <a href="#">Coffee Tables</a>
                                  </li>
                                  <li>
                                    <a href="#">Chairs</a>
                                  </li>
                                  <li>
                                    <a href="#">Tables</a>
                                  </li>
                                  <li>
                                    <a href="#">Futons &amp; Sofa Beds</a>
                                  </li>
                                  <li>
                                    <a href="#">Cabinets &amp; Chests</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-6">
                                <div className="menu-title">Office</div>
                                <ul>
                                  <li>
                                    <a href="#">Office Chairs</a>
                                  </li>
                                  <li>
                                    <a href="#">Desks</a>
                                  </li>
                                  <li>
                                    <a href="#">Bookcases</a>
                                  </li>
                                  <li>
                                    <a href="#">File Cabinets</a>
                                  </li>
                                  <li>
                                    <a href="#">Breakroom Tables</a>
                                  </li>
                                </ul>
                                <div className="menu-title">
                                  Kitchen &amp; Dining
                                </div>
                                <ul>
                                  <li>
                                    <a href="#">Dining Sets</a>
                                  </li>
                                  <li>
                                    <a href="#">Kitchen Storage Cabinets</a>
                                  </li>
                                  <li>
                                    <a href="#">Bakers Racks</a>
                                  </li>
                                  <li>
                                    <a href="#">Dining Chairs</a>
                                  </li>
                                  <li>
                                    <a href="#">Dining Room Tables</a>
                                  </li>
                                  <li>
                                    <a href="#">Bar Stools</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="banner banner-overlay">
                            <a
                              href="category.html"
                              className="banner banner-menu"
                            >
                              <img
                                src="assets/images/demos/demo-4/menu/banner-2.jpg"
                                alt="Banner"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="megamenu-container">
                    <a className="sf-with-ul" href="#">
                      <i className="icon-concierge-bell"></i>Cooking
                    </a>
                    <div className="megamenu" style={{ display: "none" }}>
                      <div className="menu-col">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="menu-title">Cookware</div>
                            <ul>
                              <li>
                                <a href="#">Cookware Sets</a>
                              </li>
                              <li>
                                <a href="#">Pans, Griddles &amp; Woks</a>
                              </li>
                              <li>
                                <a href="#">Pots</a>
                              </li>
                              <li>
                                <a href="#">Skillets &amp; Grill Pans</a>
                              </li>
                              <li>
                                <a href="#">Kettles</a>
                              </li>
                              <li>
                                <a href="#">Soup &amp; Stockpots</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-4">
                            <div className="menu-title">
                              Dinnerware &amp; Tabletop
                            </div>
                            <ul>
                              <li>
                                <a href="#">Plates</a>
                              </li>
                              <li>
                                <a href="#">Cups &amp; Mugs</a>
                              </li>
                              <li>
                                <a href="#">Trays &amp; Platters</a>
                              </li>
                              <li>
                                <a href="#">Coffee &amp; Tea Serving</a>
                              </li>
                              <li>
                                <a href="#">Salt &amp; Pepper Shaker</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-4">
                            <div className="menu-title">Cooking Appliances</div>
                            <ul>
                              <li>
                                <a href="#">Microwaves</a>
                              </li>
                              <li>
                                <a href="#">Coffee Makers</a>
                              </li>
                              <li>
                                <a href="#">Mixers &amp; Attachments</a>
                              </li>
                              <li>
                                <a href="#">Slow Cookers</a>
                              </li>
                              <li>
                                <a href="#">Air Fryers</a>
                              </li>
                              <li>
                                <a href="#">Toasters &amp; Ovens</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="row menu-banners">
                          <div className="col-md-4">
                            <div className="banner">
                              <a href="#">
                                <img
                                  src="assets/images/demos/demo-4/menu/1.jpg"
                                  alt="image"
                                />
                              </a>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="banner">
                              <a href="#">
                                <img
                                  src="assets/images/demos/demo-4/menu/2.jpg"
                                  alt="image"
                                />
                              </a>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="banner">
                              <a href="#">
                                <img
                                  src="assets/images/demos/demo-4/menu/3.jpg"
                                  alt="image"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="megamenu-container">
                    <a className="sf-with-ul" href="#">
                      <i className="icon-tshirt"></i>Clothing
                    </a>
                    <div className="megamenu" style={{ display: "none" }}>
                      <div className="row no-gutters">
                        <div className="col-md-8">
                          <div className="menu-col">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="menu-title">Women</div>
                                <ul>
                                  <li>
                                    <a href="#">
                                      <strong>New Arrivals</strong>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <strong>Best Sellers</strong>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <strong>Trending</strong>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">Clothing</a>
                                  </li>
                                  <li>
                                    <a href="#">Shoes</a>
                                  </li>
                                  <li>
                                    <a href="#">Bags</a>
                                  </li>
                                  <li>
                                    <a href="#">Accessories</a>
                                  </li>
                                  <li>
                                    <a href="#">Jewlery &amp; Watches</a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <strong>Sale</strong>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-6">
                                <div className="menu-title">Men</div>
                                <ul>
                                  <li>
                                    <a href="#">
                                      <strong>New Arrivals</strong>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <strong>Best Sellers</strong>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <strong>Trending</strong>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">Clothing</a>
                                  </li>
                                  <li>
                                    <a href="#">Shoes</a>
                                  </li>
                                  <li>
                                    <a href="#">Bags</a>
                                  </li>
                                  <li>
                                    <a href="#">Accessories</a>
                                  </li>
                                  <li>
                                    <a href="#">Jewlery &amp; Watches</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="banner banner-overlay">
                            <a
                              href="category.html"
                              className="banner banner-menu"
                            >
                              <img
                                src="assets/images/demos/demo-4/menu/banner-3.jpg"
                                alt="Banner"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="menu-col menu-brands">
                        <div className="row">
                          <div className="col-lg-2">
                            <a href="#" className="brand">
                              <img
                                src="assets/images/brands/1.png"
                                alt="Brand Name"
                              />
                            </a>
                          </div>
                          <div className="col-lg-2">
                            <a href="#" className="brand">
                              <img
                                src="assets/images/brands/2.png"
                                alt="Brand Name"
                              />
                            </a>
                          </div>
                          <div className="col-lg-2">
                            <a href="#" className="brand">
                              <img
                                src="assets/images/brands/3.png"
                                alt="Brand Name"
                              />
                            </a>
                          </div>
                          <div className="col-lg-2">
                            <a href="#" className="brand">
                              <img
                                src="assets/images/brands/4.png"
                                alt="Brand Name"
                              />
                            </a>
                          </div>
                          <div className="col-lg-2">
                            <a href="#" className="brand">
                              <img
                                src="assets/images/brands/5.png"
                                alt="Brand Name"
                              />
                            </a>
                          </div>
                          <div className="col-lg-2">
                            <a href="#" className="brand">
                              <img
                                src="assets/images/brands/6.png"
                                alt="Brand Name"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-blender"></i>Home Appliances
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-heartbeat"></i>Healthy &amp; Beauty
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-shoe-prints"></i>Shoes &amp; Boots
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-map-signs"></i>Travel &amp; Outdoor
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-mobile-alt"></i>Smart Phones
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-tv"></i>TV &amp; Audio
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-shopping-bag"></i>Backpack &amp; Bag
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-music"></i>Musical Instruments
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-gift"></i>Gift Ideas
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </>
        )}
      </Translation>
    );
  }
}
