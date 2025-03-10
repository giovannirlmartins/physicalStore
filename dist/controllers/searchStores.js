"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCoordinates = getCoordinates;
const axios_1 = __importDefault(require("axios"));
const OPEN_CAGE_API_KEY = "86697587df9b4d0f9e83f509d9df63d8";
function getCoordinates(endereco, cidade, estado) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`https://api.opencagedata.com/geocode/v1/json`, {
                params: {
                    q: `${endereco}, ${cidade}, ${estado}, Brasil`,
                    key: OPEN_CAGE_API_KEY
                }
            });
            const { lat, lng } = response.data.results[0].geometry;
            return { latitude: lat, longitude: lng };
        }
        catch (error) {
            throw new Error("Erro ao buscar coordenadas.");
        }
    });
}
