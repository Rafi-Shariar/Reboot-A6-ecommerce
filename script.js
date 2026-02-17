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

//Loading Cat Buttons
async function LoadCatButtons() {

  const res = await fetch("https://fakestoreapi.com/products/categories");
  const allCats = await res.json();

  // console.log(allCats);

  const container = document.getElementById("Cat-Buttons");

  allCats.forEach((cat,index)=>{
    const button = document.createElement("div")
    button.innerHTML = `
     <button class="btn btn-soft btn-success">${cat}</button>
    `;

    container.appendChild(button)

  })
  
  
}

LoadCatButtons();