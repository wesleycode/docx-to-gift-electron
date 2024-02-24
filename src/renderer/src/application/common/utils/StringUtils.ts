export class StringUtils {

    public static getConverterParaNomeDeArquivoResumido(value: string): string {
        if (value.length > 15) {
            return `${value.slice(0, 15)}...`;
        }
        return value;
    }

}