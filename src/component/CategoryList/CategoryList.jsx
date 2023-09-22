import { useLoaderData } from "react-router-dom";


const CategoryList = () => {
    const category = useLoaderData();
    console.log(category)

    return (
        <div className="text-center my-12">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">Job Category List</h1>
            <p className="mt-5">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
                  <div className="text-center">
                    <img src="https://i.ibb.co/NyW6vSW/accounts-1.png" alt="" className="mx-auto"/>
                    <p className="font-bold">Account & Finance</p>
                    <p>150 Jobs Available</p>
                  </div>
                  <div className="flex flex-col">
                    <img src="https://i.ibb.co/NyW6vSW/chip-1.png" alt="" className="mx-auto"/>
                    <p className="font-bold">Creative Design</p>
                    <p>150 Jobs Available</p>
                  </div>
                  <div className="flex flex-col">
                    <img src="https://i.ibb.co/NyW6vSW/Group-13.png" alt="" className="mx-auto"/>
                    <p className="font-bold">Marketing & Sales</p>
                    <p>150 Jobs Available</p>
                  </div>
                  <div className="flex flex-col">
                    <img src="https://i.ibb.co/NyW6vSW/social-media-1.png" alt="" className="mx-auto"/>
                    <p className="font-bold">Engineering Job</p>
                    <p>150 Jobs Available</p>
                  </div>
            </div>
        </div>
    );
};

export default CategoryList;