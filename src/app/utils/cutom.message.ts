export class CustomMessage {
    constructor(){}
    
    create(type: string, content: string){
        let pop: string = `
        <div class="el-dialog__wrapper msg_box">
            <div class="el-dialog animate__animated animate__slideInDown">
                <div class="el-dialog__header">
                    <span style="display:${type=='warning'||type=='info'?'':'none'};">
                        ${type=='warning'?'警告':'提示'}
                    </span>
                    <button aria-label="Close"
                    class="el-dialog__headerbtn msg_close"
                    type="button">
                        <i class="el-dialog__close el-icon el-icon-close"></i>
                    </button>
                </div>
                <div class="el-dialog__body">
                    <span class="el-alert--${type}">
                        <i class="el-alert__icon el-icon-${type}"></i>
                        ${content}
                    </span>
                </div>
                <div class="el-dialog__footer"></div>
            </div>
        </div>
        `;
        let box = document.createElement('div')
        box.className = 'pop_box'
        box.innerHTML = pop
        window.document.body.appendChild(box);
        let self = this
        setTimeout(function(){
            document.getElementsByClassName('msg_close')[0]
            .addEventListener('click',function(){
                self.remove()
            }, false)
        })
    }
    remove(){
        document.getElementsByClassName('pop_box')[0].remove()
    }

    show(type: string, msg: string){
        this.create(type, msg)
    }
}