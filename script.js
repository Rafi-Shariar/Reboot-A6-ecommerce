//Loading Trending Products
async function loadTrendingProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const allProducts = await res.json();

  // console.log(allProducts);

  const topProducts = allProducts.slice(0, 3);
  // console.log(topProducts);

  const container = document.getElementById("trending-container");
  container.innerHTML = "";

  topProducts.forEach((product) => {
    const card = document.createElement("div");
    card.className = "h-full";

    card.innerHTML = `
         <div class="card bg-base-100 shadow-lg h-full flex flex-col">
            <figure class="border-b-2 border-b-blue-100 py-4 shrink-0 bg-white">
              <img src="${product.image}" class="object-contain h-48 w-full" />
            </figure>
            
            <div class="card-body flex flex-col p-5 bg-blue-50">
              <h2 class="card-title text-xl">
                ${product.title}
              </h2>
              
              
              <p class="text-sm text-gray-500">
                ${product.description.slice(0,100)}...
              </p>
              
              <div class="card-actions justify-between items-center mt-auto pt-4 ">
                <div>
                <div class="badge badge-outline mr-4">
                    <i class="fa-solid fa-layer-group text-green-600"></i> ${product.category}
                </div>
                <div class="badge badge-outline">
                    <i class="fa-solid fa-star text-orange-400"></i> ${product.rating.rate}
                </div>
                </div>

                <div>
                    <h1 class="text-xl font-semibold bg-blue-700 p-2 rounded-lg text-white">${product.price} $</h1>
                </div>
              </div>
            </div>
          </div>
        `;
    container.appendChild(card);
  });
}
loadTrendingProducts();

// load Cat products
const showProducts = async (category) => {
  const res = await fetch(`https://fakestoreapi.com/products/category/${category}`)
  const products = await res.json();

  const container = document.getElementById("products-container");
  container.innerHTML = "";

  document.getElementById('tagH1').innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "h-full mt-16";

    card.innerHTML = `
         <div class="card bg-base-100 shadow-lg flex flex-col">
            <figure class="border-b-2 border-b-blue-100 py-4 shrink-0 bg-white">
              <img src="${product.image}" class="object-contain h-48 w-full" />
            </figure>
            
            <div class="card-body flex flex-col p-5 bg-blue-50">
              <h2 class="card-title text-xl">
                ${product.title.slice(0,20)} ...
              </h2>

               <div>
                    <h1 class="text-lg font-semibold bg-blue-700 p-2 rounded-lg text-white"> Price: ${product.price} $</h1>
                </div>
              
              <div class="card-actions justify-between items-center mt-auto pt-4 ">
                <div>
                <div class="badge badge-outline mr-4">
                    <i class="fa-solid fa-layer-group text-green-600"></i> ${product.category}
                </div>
                <div class="badge badge-outline">
                    <i class="fa-solid fa-star text-orange-400"></i> ${product.rating.rate}
                </div>
                </div>

               
              </div>

              <div class="flex justify-between gap-3">
                 <button onclick="showDetails(${product.id})" class="btn btn-outline btn-primary w-1/2">Details</button>
                 <button class="btn btn-outline btn-success w-1/2">Add to Cart</button>
              </div>

            </div>
          </div>
        `;
    container.appendChild(card);
  });

  
}

async function showDetails(id){
  
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)
  const details = await res.json();

  const a = document.getElementById("my_modal_1");
  const container = document.getElementById("Modaldetails");
  container.innerHTML = `

      <h1 class="text-2xl font-semibold">${details.title}</h1>
      <h1 class="mt-3 text-lg font-semibold text-gray-500">Description</h1>
      <p class="mt-3 text-base text-gray-500">${details.description}</p>

       <div class="flex justify-between mt-3 gap-3">
          <h1 class="lg:text-lg font-semibold bg-blue-300 p-2 rounded-lg text-white w-[150px]"> Price: ${details.price} $</h1>
          
        <h1 class=" lg:text-lg font-semibold bg-orange-300 p-2 rounded-lg text-white w-[150px]"> Rating: ${details.rating.rate}  </h1>
        <button class="btn btn-info">Buy Now</button>
        </div>
  
  `

  a.showModal()
  
  
}

//Loading Cat Buttons
async function LoadCatButtons() {

  const res = await fetch("https://fakestoreapi.com/products/categories");
  const allCats = await res.json();

  // console.log(allCats);

  const container = document.getElementById("Cat-Buttons");

  allCats.forEach((cat,index)=>{
    const button = document.createElement("div")
    button.innerHTML = `
     <button onclick="showProducts(\`${cat}\`)" class="btn btn-soft btn-success">${cat}</button>
    `;

    container.appendChild(button)

  })
    
}
LoadCatButtons();

