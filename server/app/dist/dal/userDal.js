var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import userModel from "../mongoose/model.js";
const data = {
    "location": {
        "name": "Paris",
        "region": "Ile-de-France",
        "country": "France",
        "lat": 48.86,
        "lon": 2.35,
        "tz_id": "Europe/Paris",
        "localtime_epoch": 1702981415,
        "localtime": "2023-12-19 11:23"
    },
    "current": {
        "last_updated_epoch": 1702980900,
        "last_updated": "2023-12-19 11:15",
        "temp_c": 7.0,
        "temp_f": 44.6,
        "is_day": 1,
        "condition": {
            "text": "Overcast",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/122.png",
            "code": 1009
        },
        "wind_mph": 8.1,
        "wind_kph": 13.0,
        "wind_degree": 190,
        "wind_dir": "S",
        "pressure_mb": 1027.0,
        "pressure_in": 30.33,
        "precip_mm": 0.0,
        "precip_in": 0.0,
        "humidity": 81,
        "cloud": 75,
        "feelslike_c": 4.1,
        "feelslike_f": 39.4,
        "vis_km": 10.0,
        "vis_miles": 6.0,
        "uv": 3.0,
        "gust_mph": 13.7,
        "gust_kph": 22.1
    }
};
function sandUserToDbDal(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = new userModel(user);
        data.save();
        const res = yield userModel.findOne({ email: user.email });
        if (res)
            return res;
        throw new Error();
    });
}
export { sandUserToDbDal };
