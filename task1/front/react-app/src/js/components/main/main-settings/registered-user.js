import React, { Component } from 'react'

export default class RegisteredUser extends Component {
    render() {
        return (
            <tr class="registered-user" height="50">
                <td><span class="registered-user__login">$login</span></td>
                <td id="status-buttons-$login" class="status-buttons" width="100%">
                    <button class="status-button $userClass user" value="$value" name="user" onclick="changeStatus('$login', 'user');colorButtonByClick(event.target, event.target.value, event.target.name, '$login');">user</button>
                    <button class="status-button $editorClass editor" value="$value" name="editor" onclick="changeStatus('$login', 'editor');colorButtonByClick(event.target, event.target.value, event.target.name, '$login');">editor</button>
                    <button class="status-button $adminClass admin" value="$value" name="admin" onclick="changeStatus('$login', 'admin');colorButtonByClick(event.target, event.target.value, event.target.name, '$login');">admin</button>
                </td>
            </tr>
        )
    }
}
