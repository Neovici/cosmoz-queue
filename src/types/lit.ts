import { TemplateResult } from 'lit-html';
import { DirectiveResult } from 'lit-html/directive.js';

// TODO: drop in favor of https://github.com/lit/lit/issues/1170, when available
export type LitRenderable =
	| TemplateResult
	| string
	| number
	| bigint
	| Date
	| null
	| undefined
	| DirectiveResult
	| ReadonlyArray<LitRenderable>;
