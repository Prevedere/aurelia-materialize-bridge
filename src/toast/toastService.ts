import * as au from "../aurelia";

export class MdToastService {
	removeAll() {
		M.Toast.dismissAll();
	}

	show(message: string, displayLength?: number, className?: string, activationPercent?: number, inDuration?: number, outDuration?: number): Promise<M.Toast> {
		let options: Partial<M.ToastOptions> = { html: message, displayLength, classes: className, activationPercent, inDuration, outDuration };
		au.cleanOptions(options);
		return new Promise(resolve => {
			options.completeCallback = () => resolve(instance);
			let instance = new M.Toast(options);
		});
	}
}
