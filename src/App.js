import Home from "./components/template/Home";
import Shop from "./components/template/Shop";

import ProductDetailPage from "./components/template/pages/ProductDetailPage";
import NewsPage from "./components/template/pages/NewsPage";
import NewsDetailPage from "./components/template/pages/NewsDetailPage";
import Error404Page from "./components/template/pages/Error404Page";
import ContactPage from "./components/template/pages/ContactPage";
import Main from "./components/admin/Main";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import AddProduct from "./components/admin/handle/AddProduct";
import EditProduct from "./components/admin/handle/EditProduct";
import CategoriesAdmin from "./components/admin/pages/CategoriesAdmin";
import ContactAdmin from "./components/admin/pages/ContactAdmin";
import AddCate from "./components/admin/pages/handlePage/AddCate";
import EditCate from "./components/admin/pages/handlePage/EditCate";
import CartPage from "./components/template/pages/CartPage";
import Checkout from "./components/template/pages/Checkout";
import InvoicesAdmin from "./components/admin/pages/InvoicesAdmin";
import Login from "./components/template/pages/Login";
import Register from "./components/template/pages/Register";
import UserAdmin from "./components/admin/pages/UserAdmin";
import CommentAdmin from "./components/admin/pages/CommentAdmin";
import DetailInvoice from "./components/admin/handle/DetailInvoice";
import DetailComment from "./components/admin/handle/DetailComment";

function App() {
  const [dataProduct, setDataProduct] = useState([]);
  const [dataCate, setDataCate] = useState([]);
  const [dataContact, setDataContact] = useState([]);
  const [dataInvoice, setDataInvoice] = useState([]);
  const [dataUser, setDataUser] = useState([]);
  const [dataComment, setDatacomment] = useState([]);
  useEffect(() => {
    try {
      const getData = async () => {
        const response = await fetch(`http://localhost:3004/products`);
        const responseCate = await fetch(`http://localhost:3004/categories`);
        const responseContact = await fetch(`http://localhost:3004/contacts`);
        const responseInvoice = await fetch(`http://localhost:3004/invoices`);
        const responseUser = await fetch(`http://localhost:3004/user`);
        const responseComment = await fetch(`http://localhost:3004/comment`);

        const dataProduct = await response.json();
        const dataCate = await responseCate.json();
        const dataContact = await responseContact.json();
        const dataInvoice = await responseInvoice.json();
        const dataUser = await responseUser.json();
        const dataCommnet = await responseComment.json();

        setDataContact(dataContact);
        setDataProduct(dataProduct);
        setDataCate(dataCate);
        setDataInvoice(dataInvoice);
        setDataUser(dataUser);
        setDatacomment(dataCommnet);
      };
      // new
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  // product
  const handleAdd = async (value) => {
    try {
      const response = await fetch(`http://localhost:3004/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });
      const data = await response.json();

      setDataProduct([...dataProduct, data]);
    } catch (error) {
      console.log(error);
    }
  };
  const onHandleDel = async (id) => {
    try {
      await fetch(`http://localhost:3004/products/${id}`, {
        method: "DELETE",
      });

      const newDataDel = dataProduct.filter((ab) => ab.id !== id);

      setDataProduct(newDataDel);
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleUpdate = async (dataP) => {
    try {
      await fetch(`http://localhost:3004/products/${dataP.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataP),
      });
      const newAlbums = dataProduct.map((pro) =>
        pro.id === dataP.id ? dataP : pro
      );
      setDataProduct(newAlbums);
    } catch (error) {
      console.log(error);
    }
  };
  // product end
  // Category

  const handleAddCate = async (value) => {
    try {
      const response = await fetch(`http://localhost:3004/categories`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });
      const data = await response.json();

      setDataCate([...dataCate, data]);
    } catch (error) {
      console.log(error);
    }
  };
  const onHandleDelCate = async (id) => {
    try {
      await fetch(`http://localhost:3004/categories/${id}`, {
        method: "DELETE",
      });

      const newDataDel = dataCate.filter((ab) => ab.id !== id);

      setDataCate(newDataDel);
    } catch (error) {
      console.log(error);
    }
  };
  const onHandleUpdateCate = async (dataP) => {
    try {
      await fetch(`http://localhost:3004/categories/${dataP.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataP),
      });
      const newAlbums = dataCate.map((pro) =>
        pro.id === dataP.id ? dataP : pro
      );
      setDataCate(newAlbums);
    } catch (error) {
      console.log(error);
    }
  };

  // Category

  //  contact
  const onHandleDelContact = async (id) => {
    try {
      await fetch(`http://localhost:3004/contacts/${id}`, {
        method: "DELETE",
      });

      const newDataDel = dataContact.filter((ab) => ab.id !== id);

      setDataContact(newDataDel);
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddContact = async (value) => {
    try {
      const response = await fetch(`http://localhost:3004/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });
      const data = await response.json();

      setDataInvoice([...dataContact, data]);

      alert("Gửi Tin nhắn thành Công !");
    } catch (error) {
      console.log(error);
    }
  };
  //  contact end

  //  invoice
  const handleAddInvoice = async (value) => {
    try {
      const response = await fetch(`http://localhost:3004/invoices`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });
      const data = await response.json();

      setDataInvoice([...dataInvoice, data]);
      setCartItems([]);
      alert("Gửi hóa đơn thành Công !");
    } catch (error) {
      console.log(error);
    }
  };
  const onHandleDelInvoice = async (id) => {
    try {
      await fetch(`http://localhost:3004/invoices/${id}`, {
        method: "DELETE",
      });

      const newDataDel = dataInvoice.filter((ab) => ab.id !== id);

      setDataInvoice(newDataDel);
    } catch (error) {
      console.log(error);
    }
  };

  // invoice end

  // comment
  const handleAddComment = async (value) => {
    try {
      const response = await fetch(`http://localhost:3004/comment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });
      const data = await response.json();

      setDatacomment([...dataComment, data]);

      alert("Thêm bình luận thành công !");
    } catch (error) {
      console.log(error);
    }
  };
  const onHandleDelComment = async (id) => {
    try {
      await fetch(`http://localhost:3004/comment/${id}`, {
        method: "DELETE",
      });

      const newDataDel = dataComment.filter((ab) => ab.id !== id);

      setDatacomment(newDataDel);
    } catch (error) {
      console.log(error);
    }
  };
  // comment end

  //cart
  const [cartItems, setCartItems] = useState([]);
  const subtotal = cartItems.reduce((a, x) => a + x.qty * x.price, 0);
  const onAddCart = (products) => {
    const oneItem = cartItems.find((c) => c.id === products.id);
    if (oneItem) {
      setCartItems(
        cartItems.map((c) =>
          c.id === products.id ? { ...oneItem, qty: oneItem.qty + 1 } : c
        )
      );
    } else {
      setCartItems([...cartItems, { ...products, qty: 1 }]);
    }
  };

  const onInc = (products) => {
    const oneItem = cartItems.find((c) => c.id === products.id);
    if (oneItem.qty === 1) {
      setCartItems(
        cartItems.map((c) =>
          c.id === products.id ? { ...oneItem, qty: 1 } : c
        )
      );
    } else {
      setCartItems(
        cartItems.map((c) =>
          c.id === products.id ? { ...oneItem, qty: oneItem.qty - 1 } : c
        )
      );
    }
  };
  const onDec = (products) => {
    const oneItem = cartItems.find((c) => c.id === products.id);
    setCartItems(
      cartItems.map((c) =>
        c.id === products.id ? { ...oneItem, qty: oneItem.qty + 1 } : c
      )
    );
  };
  // input has been changed in cart
  const onBlurQty = (val, id) => {
    const oneItem = cartItems.find((x) => x.id === id);

    if (val < 1) {
      setCartItems(
        cartItems.map((c) => (c.id === id ? { ...oneItem, qty: 1 } : c))
      );
      alert("số lượng không được nhỏ hơn 1");
    } else {
      setCartItems(
        cartItems.map((c) =>
          c.id === id ? { ...oneItem, qty: parseInt(val) } : c
        )
      );
    }
  };
  const onRemoveCart = (products) => {
    setCartItems(cartItems.filter((c) => c.id !== products.id));
    alert(`Product deleted successfully`);
  };

  const [qty, setQty] = useState(1);

  const onAddCartDetail = (products) => {

    const oneItem = cartItems.find((c) => c.id === products.id);
    if (oneItem) {
      setCartItems(
        cartItems.map((c) =>
          c.id === products.id
            ? { ...oneItem, qty: oneItem.qty + parseInt(qty) }
            : c
        )
      );
      setQty(1);
      
    } else {
      setCartItems([...cartItems, { ...products, qty: parseInt(qty) }]);
      setQty(1)
    }

  };

  //cart end

  // viewProducts
  const [viewP, setViewP] = useState("");
  const handleViewP = (id) => {
    const viewFind = dataProduct.find((x) => x.id === id);

    setViewP(viewFind);
    console.log(viewP);
  };
  // viewProducts end

  // handle login
  const [loginUser, setLoginUser] = useState("");

  const handlLogOut = () => {
    setLoginUser("");
    alert("Logout !");
  };

  const handleRegister = async (value) => {
    try {
      const response = await fetch(`http://localhost:3004/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });
      const data = await response.json();

      setDataUser([...dataUser, data]);
    } catch (error) {
      console.log(error);
    }
  };

  // handle login end

  // user admin
  const onHandleDelUser = async (id) => {
    try {
      await fetch(`http://localhost:3004/user/${id}`, {
        method: "DELETE",
      });

      const newDataDel = dataUser.filter((ab) => ab.id !== id);

      setDataUser(newDataDel);
    } catch (error) {
      console.log(error);
    }
  };
  // user admin end
  return (
    <Router>
      <div>
        <Switch>
          <Route
            path="/"
            exact
            component={() => (
              <Home
              dataCate={dataCate}
              onAddCart={onAddCart}
                onRemoveCart={onRemoveCart}
                dataProduct={dataProduct}
                cartItems={cartItems}
                viewP={viewP}
                loginUser={loginUser}
                handlLogOut={handlLogOut}
              />
            )}
          />
          {/* shop */}
          <Route
            path="/shop"
            exact
            component={() => (
              <Shop
                loginUser={loginUser}
                handlLogOut={handlLogOut}
                onAddCart={onAddCart}
                dataProduct={dataProduct}
                dataCate={dataCate}
                cartItems={cartItems}
                onRemoveCart={onRemoveCart}
                viewP={viewP}
                handleViewP={handleViewP}
              />
            )}
          />

          <Route
            path="/shopdetail/:id"
            exact
            component={() => (
              <ProductDetailPage
                qty={qty}
                setQty={setQty}
                onAddCartDetail={onAddCartDetail}
                setCartItems={setCartItems}
                dataComment={dataComment}
                handleAddComment={handleAddComment}
                dataCate={dataCate}
                loginUser={loginUser}
                handlLogOut={handlLogOut}
                dataProduct={dataProduct}
                onAddCart={onAddCart}
                cartItems={cartItems}
                onRemoveCart={onRemoveCart}
                onInc={onInc}
                onDec={onDec}
                viewP={viewP}
              />
            )}
          />
          {/* shop end */}

          {/* New */}
          <Route
            path="/news"
            exact
            component={() => (
              <NewsPage
                cartItems={cartItems}
                onRemoveCart={onRemoveCart}
                loginUser={loginUser}
                handlLogOut={handlLogOut}
              />
            )}
          />
          <Route
            path="/newsd"
            exact
            component={() => <NewsDetailPage cartItems={cartItems} />}
            onRemoveCart={onRemoveCart}
          />

          {/* New end */}

          {/* Cart */}

          <Route
            path="/cart"
            exact
            component={() => (
              <CartPage
                onBlurQty={onBlurQty}
                subtotal={subtotal}
                dataProduct={dataProduct}
                setCartItems={setCartItems}
                cartItems={cartItems}
                onInc={onInc}
                onDec={onDec}
                onRemoveCart={onRemoveCart}
                loginUser={loginUser}
                handlLogOut={handlLogOut}
              />
            )}
          />

          <Route
            path="/checkout"
            exact
            component={() => (
              <Checkout
                cartItems={cartItems}
                onRemoveCart={onRemoveCart}
                handleAddInvoice={handleAddInvoice}
                loginUser={loginUser}
                handlLogOut={handlLogOut}
              />
            )}
          />
          {/* Cart end */}

          {/* contact */}
          <Route
            path="/contact"
            exact
            component={() => (
              <ContactPage
                handleAddContact={handleAddContact}
                cartItems={cartItems}
                loginUser={loginUser}
                handlLogOut={handlLogOut}
              />
            )}
            onRemoveCart={onRemoveCart}
          />

          {/* contact end */}

          {/* contact admin */}

          <Route
            path="/admincontact"
            exact
            component={() => (
              <ContactAdmin
                dataContact={dataContact}
                onHandleDelContact={onHandleDelContact}
              />
            )}
          />
          {/* contact admin  */}

          {/* Login  */}
          <Route
            path="/login"
            exact
            component={() => (
              <Login
                cartItems={cartItems}
                onRemoveCart={onRemoveCart}
                dataUser={dataUser}
                loginUser={loginUser}
                setLoginUser={setLoginUser}
                handlLogOut={handlLogOut}
              />
            )}
            onRemoveCart={onRemoveCart}
          />
          <Route
            path="/register"
            exact
            component={() => (
              <Register
                handleRegister={handleRegister}
                loginUser={loginUser}
                handlLogOut={handlLogOut}
                cartItems={cartItems}
              />
            )}
            onRemoveCart={onRemoveCart}
          />
          {/* Login end */}
          {/* invoice admin  */}
          <Route
            path="/admininvoice"
            exact
            component={() => (
              <InvoicesAdmin
                dataInvoice={dataInvoice}
                onHandleDelInvoice={onHandleDelInvoice}
              />
            )}
          />
          <Route
            path="/detailinvoiceadmin/:id"
            exact
            component={() => (
              <DetailInvoice
                dataProduct={dataProduct}
                dataInvoice={dataInvoice}
              />
            )}
          />

          {/* invoice admin end */}
          {/* User ADMIN  */}

          <Route
            path="/adminuser"
            exact
            component={() => (
              <UserAdmin
                onHandleDelUser={onHandleDelUser}
                dataUser={dataUser}
              />
            )}
          />
          {/* User ADMIN   pd */}

          {/* admin pd */}
          <Route
            path="/admin"
            exact
            component={() => (
              <Main
                dataProduct={dataProduct}
                dataCate={dataCate}
                onHandleDel={onHandleDel}
              />
            )}
          />
          <Route
            path="/editproduct/:id"
            exact
            component={() => (
              <EditProduct
                dataProduct={dataProduct}
                onHandleUpdate={onHandleUpdate}
                dataCate={dataCate}
              />
            )}
          />

          <Route path="/addproduct" exact>
            <AddProduct onAdd={handleAdd} dataCate={dataCate} />
          </Route>
          {/* admin pd end */}
          {/* admin Comment */}
          <Route
            path="/admincomment"
            exact
            component={() => (
              <CommentAdmin
                dataProduct={dataProduct}
                dataComment={dataComment}
                onHandleDelComment={onHandleDelComment}
              />
            )}
          />
          <Route
            path="/admindetailcomment/:id"
            exact
            component={() => (
              <DetailComment
                dataProduct={dataProduct}
                dataComment={dataComment}
                onHandleDelComment={onHandleDelComment}
              />
            )}
          />

          {/* admin Comment end */}
          {/* admincate */}
          <Route
            path="/admincate"
            exact
            component={() => (
              <CategoriesAdmin
                dataCate={dataCate}
                onHandleDelCate={onHandleDelCate}
              />
            )}
          />

          <Route path="/addcate" exact>
            <AddCate onAdd={handleAddCate} />
          </Route>

          <Route
            path="/editcate/:id"
            exact
            component={() => (
              <EditCate
                onHandleUpdateCate={onHandleUpdateCate}
                dataCate={dataCate}
              />
            )}
          />

          {/* admincate */}

          <Route path="*" exact component={() => <Error404Page />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
