const {City}=require('../models/index.js');

class CityRepository{
    async CreateCity({name}){
        try{
            const City=await City.create({name});
            return City;
        }
        catch(error){
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
        }catch(error){
            throw {error};
        }
    }
}

module.exports=CityRepository;

