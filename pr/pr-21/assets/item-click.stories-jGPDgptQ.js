import{b as s}from"./iframe-Bd9fbOqB.js";import"./preload-helper-PPVm8Dsz.js";const u=({index:a,activate:t})=>e=>{if(e.ctrlKey||e.metaKey)return;const n=new CustomEvent("omnitable-item-click",{cancelable:!0,bubbles:!0,composed:!0,detail:{index:a,activate:t}});e.currentTarget?.dispatchEvent(n),n.defaultPrevented&&e.preventDefault()},{expect:l,userEvent:v}=__STORYBOOK_MODULE_TEST__,b={title:"Tests/ItemClick"},i={render:()=>s`
        <button
            id="test-button"
            @click=${u({index:2,activate:"queue"})}
        >
            Click me
        </button>
    `,async play({canvasElement:a}){const t=a.querySelector("#test-button");let e=null;t.addEventListener("omnitable-item-click",(n=>{e=n.detail})),await v.click(t),l(e).not.toBeNull(),l(e.index).toBe(2),l(e.activate).toBe("queue")}},r={render:()=>s`
        <button
            id="test-button"
            @click=${u({index:3,activate:"list"})}
        >
            Click me
        </button>
    `,async play({canvasElement:a}){const t=a.querySelector("#test-button");let e=null,n=!1;t.addEventListener("omnitable-item-click",(c=>{e=c.detail,c.preventDefault()})),t.addEventListener("click",c=>{n=c.defaultPrevented}),await v.click(t),l(e).not.toBeNull(),l(e.index).toBe(3),l(e.activate).toBe("list"),l(n).toBe(!0)}},o={render:()=>s`
        <button
            id="test-button"
            @click=${u({index:3,activate:"list"})}
        >
            Click me
        </button>
    `,async play({canvasElement:a}){const t=a.querySelector("#test-button");let e=!1;t.addEventListener("omnitable-item-click",()=>{e=!0});const n=new MouseEvent("click",{bubbles:!0,cancelable:!0,ctrlKey:!0});t.dispatchEvent(n),l(e).toBe(!1)}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <button
            id="test-button"
            @click=\${itemClick({
    index: 2,
    activate: 'queue'
  })}
        >
            Click me
        </button>
    \`,
  async play({
    canvasElement
  }) {
    const button = canvasElement.querySelector('#test-button') as HTMLButtonElement;
    let eventDetail: {
      index: number;
      activate: string;
    } | null = null;
    button.addEventListener('omnitable-item-click', ((e: CustomEvent) => {
      eventDetail = e.detail;
    }) as EventListener);
    await userEvent.click(button);
    expect(eventDetail).not.toBeNull();
    expect(eventDetail!.index).toBe(2);
    expect(eventDetail!.activate).toBe('queue');
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <button
            id="test-button"
            @click=\${itemClick({
    index: 3,
    activate: 'list'
  })}
        >
            Click me
        </button>
    \`,
  async play({
    canvasElement
  }) {
    const button = canvasElement.querySelector('#test-button') as HTMLButtonElement;
    let eventDetail: {
      index: number;
      activate: string;
    } | null = null;
    let wasDefaultPrevented = false;
    button.addEventListener('omnitable-item-click', ((e: CustomEvent) => {
      eventDetail = e.detail;
      e.preventDefault();
    }) as EventListener);
    button.addEventListener('click', (e: MouseEvent) => {
      wasDefaultPrevented = e.defaultPrevented;
    });
    await userEvent.click(button);
    expect(eventDetail).not.toBeNull();
    expect(eventDetail!.index).toBe(3);
    expect(eventDetail!.activate).toBe('list');
    expect(wasDefaultPrevented).toBe(true);
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <button
            id="test-button"
            @click=\${itemClick({
    index: 3,
    activate: 'list'
  })}
        >
            Click me
        </button>
    \`,
  async play({
    canvasElement
  }) {
    const button = canvasElement.querySelector('#test-button') as HTMLButtonElement;
    let eventFired = false;
    button.addEventListener('omnitable-item-click', () => {
      eventFired = true;
    });

    // Simulate ctrl+click using native MouseEvent
    const ctrlClickEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      ctrlKey: true
    });
    button.dispatchEvent(ctrlClickEvent);
    expect(eventFired).toBe(false);
  }
}`,...o.parameters?.docs?.source}}};const E=["FiresEvent","PreventsDefault","DoesNotFireWithCtrlKey"];export{o as DoesNotFireWithCtrlKey,i as FiresEvent,r as PreventsDefault,E as __namedExportsOrder,b as default};
