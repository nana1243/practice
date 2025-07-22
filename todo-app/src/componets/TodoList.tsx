import React from 'react';
import CheckBox from "./html/CheckBox";
import Button from "./html/Button";
import SvgPencil from "./svg/SvgPencil";
import SvgClose from "./svg/SvgClose";
import Input from "./html/Input";

function TodoList(props) {
    return (
        <>
            <ul className="todo__list">
                {/* 할 일 목록이 없을 때 */}
                <li className="todo__item todo__item--empty">
                    <p className="todo__text--empty">There are no registered tasks</p>
                </li>
                {/*<!-- 할 일 목록이 있을 때 -->*/}
                {/*{!--할 일이 완료되면 .todo__item--complete 추가 -->}*/}
                <li className="todo__item todo__item--complete">
                    <CheckBox
                        parentClassName="todo__checkbox-group"
                        type="checkbox"
                        className="todo__checkbox"
                        defaultChecked
                    >
                        Eat Breakfast
                    </CheckBox>
                    {/*{<!-- 할 일을 수정할 때만 노출 (.todo__checkbox-group은 비노출) -->}*/}
                    {/*{<!-- <input type="text" class="todo__modify-input" /> -->}*/}
                    <div className="todo__button-group">
                        <Button className="todo__action-button">
                            <SvgPencil/>
                        </Button>
                        <Button className="todo__action-button">
                            <SvgClose/>
                        </Button>
                    </div>
                </li>
                <li className="todo__item todo__item--complete">
                    {/*{<!-- <div class="todo__checkbox-group">*/}
                    {/*    <input type="checkbox" class="todo__checkbox" checked />*/}
                    {/*    <label>Eat Breakfast</label>*/}
                    {/*    </div> -->*/}
                    {/*    <!-- 할 일을 수정할 때만 노출 (.todo__checkbox-group은 비노출) -->}                    */}
                    <Input type="text" className="todo__modify-input"/>
                    <div className="todo__button-group">
                        <Button className="todo__action-button">
                            <SvgPencil/>
                        </Button>
                        <Button className="todo__action-button">
                            <SvgClose/>
                        </Button>
                    </div>
                </li>
            </ul>

        </>
    );
}

export default TodoList;