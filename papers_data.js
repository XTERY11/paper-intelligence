// Paper Intelligence — 学术情报数据库
// 由 SKILL.md 自动追加，请勿手动编辑结构
// Last updated: auto

var PAPERS_DATA = PAPERS_DATA || [];

// ── 示例条目（可删除）──────────────────────────────
PAPERS_DATA.push({
  id: "Wei-2022-chain-of-thought",
  title: "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models",
  authors: "Wei, J. et al.",
  year: 2022,
  venue: "NeurIPS",
  citations: 8420,
  badge: "🔥",
  topics: ["T1", "T4"],
  date_added: "2026-03-16",
  background: "大型语言模型在复杂推理任务上表现不稳定，传统 few-shot prompting 无法引导模型展示中间推理步骤，导致多步骤问题（算术、常识、符号推理）的准确率较低。",
  thesis: "通过在 few-shot 示例中加入自然语言推理链（chain-of-thought），可以显著激活大模型的逐步推理能力，且该能力随模型规模出现涌现。",
  abstract_zh: "本文提出 Chain-of-Thought Prompting，在 few-shot 示例中嵌入逐步推理过程，使 GPT-3 175B 在 GSM8K 上准确率从 17% 提升至 58%，超越此前 SOTA。",
  innovations: [
    "首次系统验证了自然语言推理链可作为 prompting 格式提升 LLM 复杂推理能力",
    "发现 CoT 能力是超大规模模型（>100B）的涌现特性，小模型无效",
    "证明 CoT 无需微调，仅 prompting 即可迁移至多种推理类型（算术/常识/符号）"
  ],
  insights: [
    "推理能力的关键不在于模型大小本身，而在于模型是否具备将复杂问题分解为子步骤的内部表示",
    "Prompting 格式对模型行为的影响远超预期——同一模型通过不同 prompt 可有量级差距的性能表现",
    "涌现（Emergence）现象暗示现有评测体系可能严重低估了中小模型的潜在上限"
  ],
  good_sentences: [
    {
      original: "We find that chain-of-thought prompting does not positively impact performance for small models, and only yields performance gains when used with models of ∼100B parameters.",
      note: "清晰的实证边界声明——好论文不只说'有效'，还要说清楚'在什么条件下有效'，是写作严谨性的范本。"
    }
  ],
  methodology: "在 PaLM、GPT-3、LaMDA 等模型上，构造包含推理链的 few-shot exemplars，对比标准 prompting 在 GSM8K、SVAMP、AQuA、StrategyQA、BIG-Bench 等基准上的表现，消融实验验证推理链各组件的贡献。",
  results: "PaLM 540B + CoT 在 GSM8K 达 58%（+41% vs 标准 prompting），在 MGSM 多语言推理任务上同样大幅领先，验证了跨语言迁移能力。",
  connection: "T1 核心论文。CoT 是理解 LLM Reasoning 机制研究的前提背景，且其涌现特性与 T2 可解释性研究直接相关——为什么推理链能工作，内部表示发生了什么变化？",
  doi: "https://arxiv.org/abs/2201.11903",
  annotation_path: "annotations/Wei-2022-chain-of-thought.html"
});
