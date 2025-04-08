const {City}=require('../models/index.js');

class CityRepository{
    async CreateCity({name}){
        try{
            const City=await City.create({name});
            return City;
        }
        catch(error){
            console.log("Something went wrong in repositoery Layer");
            throw{error};
        }
    }

    async deleteCity(cityId){
        try{
            await City.destroy({
                where:{
                    id:cityId
                }
            });
            return true;
        }catch(error){
            console.log("Something went wrong in repositoery Layer"); 
            throw {error};
        }
    }
    async getCity(cityId){
     try{
        const City=await City.findByPk(cityId);
        return City;
     }catch(error){
        console.log("Something went wrong in repositoery Layer"); 
        throw {error};
     }
    }

    async updatecity(cityId,data){
        try{
            const City=await City.update(data,{
                where:{
                    id:cityId
                }
            });
        }
        catch(error){
            console.log("Something went wrong in repositoery Layer"); 
            throw {error};
        }
    }
}

module.exports=CityRepository;

