
import {Dispatch} from "react";
import axios from "axios";
import {ActionEnum, ActionTypes} from "../reducers/countryCodeReducer";

//Создание экшена
export const fetchCode = () => {
    //Возвращаем асинхронный каллбэк
    //Передаем аргументом диспатч с типом диспатч и типом данного экшена
    return async (dispatch: Dispatch<ActionTypes>) => {
        //Оборачиваем в блок try catch
        try {
            // Запускаем первый кейс, поле загрузки меняется на тру в компоненте рисуется лоадер
            dispatch({type: ActionEnum.FETCH_CODE})
            // Отправляем гет запрос записываем ответ в респонс
            const response = await axios.get('https://cors-anywhere.herokuapp.com/http://country.io/currency.json', {
                headers: {
                    Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*'
                }})

            dispatch({type: ActionEnum.FETCH_CODE_SUCCESS, payload: response.data})
        } catch (e) {
            //Если произойдет ошибка сервера сработает этот кейс и компонент отрисует ошибку
            dispatch({type: ActionEnum.FETCH_CODE_ERROR, payload: 'Произошла ошибка'})
        }
    }
}