import{t as e}from"./chunk-BvrOYcoh.js";import{a as t,o as n}from"./lit-html-B0z-6tlh.js";var r,i=e((()=>{r=({item:e,index:t,activate:n})=>r=>{if(r.ctrlKey||r.metaKey)return;let i=new CustomEvent(`omnitable-item-click`,{cancelable:!0,bubbles:!0,composed:!0,detail:{item:e,index:t,activate:n}});r.currentTarget?.dispatchEvent(i),i.defaultPrevented&&r.preventDefault()}})),a,o,s,c,l,u,d;e((()=>{n(),i(),{expect:a,userEvent:o}=__STORYBOOK_MODULE_TEST__,s={title:`Tests/ItemClick`},c={render:()=>t`
        <button
            id="test-button"
            @click=${r({index:2,activate:`queue`})}
        >
            Click me
        </button>
    `,async play({canvasElement:e}){let t=e.querySelector(`#test-button`),n=null;t.addEventListener(`omnitable-item-click`,(e=>{n=e.detail})),await o.click(t),a(n).not.toBeNull(),a(n.index).toBe(2),a(n.activate).toBe(`queue`)}},l={render:()=>t`
        <button
            id="test-button"
            @click=${r({index:3,activate:`list`})}
        >
            Click me
        </button>
    `,async play({canvasElement:e}){let t=e.querySelector(`#test-button`),n=null,r=!1;t.addEventListener(`omnitable-item-click`,(e=>{n=e.detail,e.preventDefault()})),t.addEventListener(`click`,e=>{r=e.defaultPrevented}),await o.click(t),a(n).not.toBeNull(),a(n.index).toBe(3),a(n.activate).toBe(`list`),a(r).toBe(!0)}},u={render:()=>t`
        <button
            id="test-button"
            @click=${r({index:3,activate:`list`})}
        >
            Click me
        </button>
    `,async play({canvasElement:e}){let t=e.querySelector(`#test-button`),n=!1;t.addEventListener(`omnitable-item-click`,()=>{n=!0});let r=new MouseEvent(`click`,{bubbles:!0,cancelable:!0,ctrlKey:!0});t.dispatchEvent(r),a(n).toBe(!1)}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`FiresEvent`,`PreventsDefault`,`DoesNotFireWithCtrlKey`]}))();export{u as DoesNotFireWithCtrlKey,c as FiresEvent,l as PreventsDefault,d as __namedExportsOrder,s as default};