import * as au from "../aurelia";
import { MdInputUpdateService } from "./input-update-service";
export declare class MdInput {
    private element;
    private taskQueue;
    private updateService;
    constructor(element: Element, taskQueue: au.TaskQueue, updateService: MdInputUpdateService);
    static id: number;
    controlId: string;
    label: HTMLLabelElement;
    input: HTMLInputElement;
    inputField: HTMLDivElement;
    mdLabel: string;
    mdBlurOnEnter: boolean;
    mdDisabled: boolean;
    mdReadonly: boolean;
    mdPlaceholder: string;
    mdTextArea: boolean;
    mdType: string;
    mdStep: string;
    mdValidate: boolean;
    mdShowErrortext: boolean;
    mdUpdateTrigger: string[];
    mdValidateError: string;
    mdValidateSuccess: string;
    mdValue: string;
    mdValueChanged(): void;
    mdMin: string;
    mdMax: string;
    mdName: string;
    mdMaxlength: number;
    suspendUpdate: boolean;
    bind(): void;
    attached(): void;
    detached(): void;
    blur(): void;
    focus(): void;
    attachEventHandlers(): void;
    detachEventHandlers(): void;
    blurOnEnter(e: any): void;
    mdUnrenderValidateResults: (results: au.ValidateResult[], renderer: au.MaterializeFormValidationRenderer) => void;
    mdRenderValidateResults: (results: au.ValidateResult[], renderer: au.MaterializeFormValidationRenderer) => void;
}
