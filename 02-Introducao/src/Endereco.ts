export default class Endereco {
    private _rua : string;
    private _numero : number;
    private _cidade : string;
    private _estado : string;



    /**
     * Getter rua
     * @return {string}
     */
	public get rua(): string {
		return this._rua;
	}

    /**
     * Getter numero
     * @return {number}
     */
	public get numero(): number {
		return this._numero;
	}

    /**
     * Getter cidade
     * @return {string}
     */
	public get cidade(): string {
		return this._cidade;
	}

    /**
     * Getter estado
     * @return {string}
     */
	public get estado(): string {
		return this._estado;
	}

    /**
     * Setter rua
     * @param {string} value
     */
	public set rua(value: string) {
		this._rua = value;
	}

    /**
     * Setter numero
     * @param {number} value
     */
	public set numero(value: number) {
		this._numero = value;
	}

    /**
     * Setter cidade
     * @param {string} value
     */
	public set cidade(value: string) {
		this._cidade = value;
	}

    /**
     * Setter estado
     * @param {string} value
     */
	public set estado(value: string) {
		this._estado = value;
	}

	constructor() {
	}

}