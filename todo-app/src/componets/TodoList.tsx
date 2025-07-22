import React from 'react';
import SvgPencil from "./svg/SvgPencil";
import SvgClose from "./svg/SvgClose";

function TodoList(props) {
    return (
        <div className="todo">
            <h1 className="todo__title">Todo List</h1>
            <p className="todo__subtitle">Please enter your details to continue.</p>

            <form className="todo__form">
                <div className="todo__editor">
                    <input
                        type="text"
                        className="todo__input"
                        placeholder="Enter Todo List"
                    />
                    <button className="todo__button" type="submit">Add</button>
                </div>
            </form>


            <ul className="todo__list">
                {/* 할 일 목록이 없을 때 */}
                <li className="todo__item todo__item--empty">
                    <p className="todo__text--empty">There are no registered tasks</p>
                </li>
                {/*<!-- 할 일 목록이 있을 때 -->*/}
                {/*{!--할 일이 완료되면 .todo__item--complete 추가 -->}*/}
                <li className="todo__item todo__item--complete">
                    <div className="todo__checkbox-group">
                        <input type="checkbox" className="todo__checkbox" checked/>
                        <label>Eat Breakfast</label>
                    </div>
                    {/*{<!-- 할 일을 수정할 때만 노출 (.todo__checkbox-group은 비노출) -->}*/}
                    {/*{<!-- <input type="text" class="todo__modify-input" /> -->}*/}
                    <div className="todo__button-group">
                        <button className="todo__action-button">
                            <SvgPencil/>
                        </button>
                        <button className="todo__action-button">
                            <SvgClose/>
                        </button>
                    </div>
                </li>
                <li className="todo__item todo__item--complete">
                    {/*{<!-- <div class="todo__checkbox-group">*/}
                    {/*    <input type="checkbox" class="todo__checkbox" checked />*/}
                    {/*    <label>Eat Breakfast</label>*/}
                    {/*    </div> -->*/}
                    {/*    <!-- 할 일을 수정할 때만 노출 (.todo__checkbox-group은 비노출) -->}                    */}
                    <input type="text" className="todo__modify-input"/>
                    <div className="todo__button-group">
                        <button className="todo__action-button">
                            <SvgPencil/>
                        </button>
                        <button className="todo__action-button">
                            <SvgClose/>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default TodoList;