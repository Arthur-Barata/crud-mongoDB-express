import livrosModel from "../models/Livros.js";

export default class LivrosService {
	static ListarLivros = async (req, res) => {
		try {
			const livros = await livrosModel.find();
			res.status(200).json(livros);
		} catch (error) {
			console.log(error);
		}
	};

	static pegarLivroPorId = async (req, res) => {
		try {
			const response = await livrosModel.findById(req.params.id);
			res.status(200).json(response);
		} catch (error) {
			console.log(error);
		}
	};
	static criarLivro = async (req, res) => {
		try {
			await livrosModel.create(req.body);
			res.status(200).send("livro criado com sucesso");
		} catch (error) {
			res.status(500).send(error.message);
		}
	};

	static atualizarLivro = async (req, res) => {
		try {
			await livrosModel.findByIdAndUpdate(req.params.id, { $set: req.body });
			res.status(200).send("livro atualizado com sucesso");
		} catch (err) {
			res.status(500).send("erro ao atualizar livro");
		}
	};

	static deletarLivro = async (req, res) => {
		try {
			await livrosModel.findByIdAndDelete(req.params.id);
			res.status(200).send("livro deletado com sucesso");
		} catch (err) {
			res.status(500).send("erro ao deletar livro");
		}
	};
}
