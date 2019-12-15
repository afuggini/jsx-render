import synteticEvents from './synteticEvents'

class JSXComponent {
  public props: any
  constructor(props = {} as any) {
    this.props = props
    this.ref = this.ref.bind(this, props)
    this.render = this.render.bind(this)
  }
  public ref(node, props) {
    const events = Object.keys(props).filter(prop => synteticEvents.includes(prop))
    events.forEach(synteticEvent => {
      const event = synteticEvent.replace(/^on/, '').toLowerCase()
      node.addEventListener(event, props[synteticEvent])
    })
  }
  public render() {
    return
  }
}

export default JSXComponent
