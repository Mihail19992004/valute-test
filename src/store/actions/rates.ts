
import {Dispatch} from "react";
import axios from "axios";
import {ActionEnum, ActionTypes} from "../reducers/ratesReducer";
//Создание экшена
export const fetchUsers = () => {
    //Возвращаем асинхронный каллбэк
    //Передаем аргументом диспатч с типом диспатч и типом данного экшена
    return async (dispatch: Dispatch<ActionTypes>) => {
        //Оборачиваем в блок try catch
        try {
            // Запускаем первый кейс, поле загрузки меняется на тру в компоненте рисуется лоадер
            dispatch({type: ActionEnum.FETCH_RATES})
            // Отправляем гет запрос записываем ответ в респонс
            const response = await axios.get('http://data.fixer.io/api/latest?access_key=822ebca9d3595487649c955adac2e6a9')

            dispatch({type: ActionEnum.FETCH_RATES_SUCCESS, payload: response.data.rates})
        } catch (e) {
            //Если произойдет ошибка сервера сработает этот кейс и компонент отрисует ошибку
            dispatch({type: ActionEnum.FETCH_RATES_ERROR, payload: 'Произошла ошибка'})
        }
    }
}