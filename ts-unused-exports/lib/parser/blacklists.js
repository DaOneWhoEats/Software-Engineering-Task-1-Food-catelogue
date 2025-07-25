"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ignoreLocalBlacklist = exports.namespaceBlacklist = void 0;
var ts = require("typescript");
// A blacklist of node kinds that do NOT need to be searched for namespace usages.
//
// A blacklist is safer than trying to whitelist all the relevant items from SyntaxKind.
//
// ref: typescript.d.ts
exports.namespaceBlacklist = [
    ts.SyntaxKind.Unknown,
    ts.SyntaxKind.EndOfFileToken,
    ts.SyntaxKind.SingleLineCommentTrivia,
    ts.SyntaxKind.MultiLineCommentTrivia,
    ts.SyntaxKind.NewLineTrivia,
    ts.SyntaxKind.WhitespaceTrivia,
    ts.SyntaxKind.ShebangTrivia,
    ts.SyntaxKind.ConflictMarkerTrivia,
    ts.SyntaxKind.NumericLiteral,
    ts.SyntaxKind.BigIntLiteral,
    ts.SyntaxKind.StringLiteral,
    ts.SyntaxKind.JsxText,
    ts.SyntaxKind.JsxTextAllWhiteSpaces,
    ts.SyntaxKind.RegularExpressionLiteral,
    ts.SyntaxKind.NoSubstitutionTemplateLiteral,
    ts.SyntaxKind.TemplateHead,
    ts.SyntaxKind.TemplateMiddle,
    ts.SyntaxKind.TemplateTail,
    ts.SyntaxKind.OpenBraceToken,
    ts.SyntaxKind.CloseBraceToken,
    ts.SyntaxKind.OpenParenToken,
    ts.SyntaxKind.CloseParenToken,
    ts.SyntaxKind.OpenBracketToken,
    ts.SyntaxKind.CloseBracketToken,
    ts.SyntaxKind.DotToken,
    ts.SyntaxKind.DotDotDotToken,
    ts.SyntaxKind.SemicolonToken,
    ts.SyntaxKind.CommaToken,
    ts.SyntaxKind.QuestionDotToken,
    ts.SyntaxKind.LessThanToken,
    ts.SyntaxKind.LessThanSlashToken,
    ts.SyntaxKind.GreaterThanToken,
    ts.SyntaxKind.LessThanEqualsToken,
    ts.SyntaxKind.GreaterThanEqualsToken,
    ts.SyntaxKind.EqualsEqualsToken,
    ts.SyntaxKind.ExclamationEqualsToken,
    ts.SyntaxKind.EqualsEqualsEqualsToken,
    ts.SyntaxKind.ExclamationEqualsEqualsToken,
    ts.SyntaxKind.EqualsGreaterThanToken,
    ts.SyntaxKind.PlusToken,
    ts.SyntaxKind.MinusToken,
    ts.SyntaxKind.AsteriskToken,
    ts.SyntaxKind.AsteriskAsteriskToken,
    ts.SyntaxKind.SlashToken,
    ts.SyntaxKind.PercentToken,
    ts.SyntaxKind.PlusPlusToken,
    ts.SyntaxKind.MinusMinusToken,
    ts.SyntaxKind.LessThanLessThanToken,
    ts.SyntaxKind.GreaterThanGreaterThanToken,
    ts.SyntaxKind.GreaterThanGreaterThanGreaterThanToken,
    ts.SyntaxKind.AmpersandToken,
    ts.SyntaxKind.BarToken,
    ts.SyntaxKind.CaretToken,
    ts.SyntaxKind.ExclamationToken,
    ts.SyntaxKind.TildeToken,
    ts.SyntaxKind.AmpersandAmpersandToken,
    ts.SyntaxKind.BarBarToken,
    ts.SyntaxKind.QuestionToken,
    ts.SyntaxKind.ColonToken,
    ts.SyntaxKind.AtToken,
    ts.SyntaxKind.QuestionQuestionToken,
    /** Only the JSDoc scanner produces BacktickToken. The normal scanner produces NoSubstitutionTemplateLiteral and related kinds. */
    ts.SyntaxKind.BacktickToken,
    ts.SyntaxKind.EqualsToken,
    ts.SyntaxKind.PlusEqualsToken,
    ts.SyntaxKind.MinusEqualsToken,
    ts.SyntaxKind.AsteriskEqualsToken,
    ts.SyntaxKind.AsteriskAsteriskEqualsToken,
    ts.SyntaxKind.SlashEqualsToken,
    ts.SyntaxKind.PercentEqualsToken,
    ts.SyntaxKind.LessThanLessThanEqualsToken,
    ts.SyntaxKind.GreaterThanGreaterThanEqualsToken,
    ts.SyntaxKind.GreaterThanGreaterThanGreaterThanEqualsToken,
    ts.SyntaxKind.AmpersandEqualsToken,
    ts.SyntaxKind.BarEqualsToken,
    ts.SyntaxKind.CaretEqualsToken,
    ts.SyntaxKind.Identifier,
    ts.SyntaxKind.BreakKeyword,
    // ts.SyntaxKind.CaseKeyword,
    // ts.SyntaxKind.CatchKeyword,
    // ts.SyntaxKind.ClassKeyword,
    // ts.SyntaxKind.ConstKeyword,
    ts.SyntaxKind.ContinueKeyword,
    ts.SyntaxKind.DebuggerKeyword,
    ts.SyntaxKind.DefaultKeyword,
    ts.SyntaxKind.DeleteKeyword,
    ts.SyntaxKind.DoKeyword,
    ts.SyntaxKind.ElseKeyword,
    ts.SyntaxKind.EnumKeyword,
    ts.SyntaxKind.ExportKeyword,
    ts.SyntaxKind.ExtendsKeyword,
    ts.SyntaxKind.FalseKeyword,
    ts.SyntaxKind.FinallyKeyword,
    ts.SyntaxKind.ForKeyword,
    ts.SyntaxKind.FunctionKeyword,
    ts.SyntaxKind.IfKeyword,
    ts.SyntaxKind.ImportKeyword,
    ts.SyntaxKind.InKeyword,
    ts.SyntaxKind.InstanceOfKeyword,
    ts.SyntaxKind.NewKeyword,
    ts.SyntaxKind.NullKeyword,
    ts.SyntaxKind.ReturnKeyword,
    ts.SyntaxKind.SuperKeyword,
    ts.SyntaxKind.SwitchKeyword,
    ts.SyntaxKind.ThisKeyword,
    ts.SyntaxKind.ThrowKeyword,
    ts.SyntaxKind.TrueKeyword,
    ts.SyntaxKind.TryKeyword,
    ts.SyntaxKind.TypeOfKeyword,
    ts.SyntaxKind.VarKeyword,
    ts.SyntaxKind.VoidKeyword,
    ts.SyntaxKind.WhileKeyword,
    ts.SyntaxKind.WithKeyword,
    ts.SyntaxKind.ImplementsKeyword,
    ts.SyntaxKind.InterfaceKeyword,
    ts.SyntaxKind.LetKeyword,
    ts.SyntaxKind.PackageKeyword,
    ts.SyntaxKind.PrivateKeyword,
    ts.SyntaxKind.ProtectedKeyword,
    ts.SyntaxKind.PublicKeyword,
    ts.SyntaxKind.StaticKeyword,
    ts.SyntaxKind.YieldKeyword,
    ts.SyntaxKind.AbstractKeyword,
    ts.SyntaxKind.AsKeyword,
    ts.SyntaxKind.AssertsKeyword,
    ts.SyntaxKind.AnyKeyword,
    ts.SyntaxKind.AsyncKeyword,
    ts.SyntaxKind.AwaitKeyword,
    ts.SyntaxKind.BooleanKeyword,
    ts.SyntaxKind.ConstructorKeyword,
    ts.SyntaxKind.DeclareKeyword,
    ts.SyntaxKind.GetKeyword,
    ts.SyntaxKind.InferKeyword,
    ts.SyntaxKind.IsKeyword,
    ts.SyntaxKind.KeyOfKeyword,
    ts.SyntaxKind.ModuleKeyword,
    ts.SyntaxKind.NamespaceKeyword,
    ts.SyntaxKind.NeverKeyword,
    ts.SyntaxKind.ReadonlyKeyword,
    ts.SyntaxKind.RequireKeyword,
    ts.SyntaxKind.NumberKeyword,
    ts.SyntaxKind.ObjectKeyword,
    ts.SyntaxKind.SetKeyword,
    ts.SyntaxKind.StringKeyword,
    ts.SyntaxKind.SymbolKeyword,
    ts.SyntaxKind.TypeKeyword,
    ts.SyntaxKind.UndefinedKeyword,
    ts.SyntaxKind.UniqueKeyword,
    ts.SyntaxKind.UnknownKeyword,
    ts.SyntaxKind.FromKeyword,
    ts.SyntaxKind.GlobalKeyword,
    ts.SyntaxKind.BigIntKeyword,
    ts.SyntaxKind.OfKeyword,
    // ts.SyntaxKind.QualifiedName, // same value as FirstNode (there are other such duplicates) - this seems to be intentional - see https://github.com/microsoft/TypeScript/blob/master/src/compiler/types.ts
    ts.SyntaxKind.ComputedPropertyName,
    ts.SyntaxKind.TypeParameter,
    ts.SyntaxKind.Parameter,
    ts.SyntaxKind.Decorator,
    ts.SyntaxKind.PropertySignature,
    ts.SyntaxKind.PropertyDeclaration,
    ts.SyntaxKind.MethodSignature,
    ts.SyntaxKind.MethodDeclaration,
    ts.SyntaxKind.Constructor,
    ts.SyntaxKind.GetAccessor,
    ts.SyntaxKind.SetAccessor,
    ts.SyntaxKind.CallSignature,
    ts.SyntaxKind.ConstructSignature,
    ts.SyntaxKind.IndexSignature,
    ts.SyntaxKind.TypePredicate,
    // ts.SyntaxKind.TypeReference,
    ts.SyntaxKind.FunctionType,
    ts.SyntaxKind.ConstructorType,
    ts.SyntaxKind.TypeQuery,
    ts.SyntaxKind.TypeLiteral,
    ts.SyntaxKind.ArrayType,
    ts.SyntaxKind.TupleType,
    ts.SyntaxKind.OptionalType,
    ts.SyntaxKind.RestType,
    ts.SyntaxKind.UnionType,
    ts.SyntaxKind.IntersectionType,
    ts.SyntaxKind.ConditionalType,
    ts.SyntaxKind.InferType,
    ts.SyntaxKind.ParenthesizedType,
    ts.SyntaxKind.ThisType,
    ts.SyntaxKind.TypeOperator,
    ts.SyntaxKind.IndexedAccessType,
    ts.SyntaxKind.MappedType,
    ts.SyntaxKind.LiteralType,
    ts.SyntaxKind.ImportType,
    ts.SyntaxKind.ObjectBindingPattern,
    ts.SyntaxKind.ArrayBindingPattern,
    ts.SyntaxKind.BindingElement,
    // ts.SyntaxKind.ArrayLiteralExpression,
    // ts.SyntaxKind.ObjectLiteralExpression,
    // ts.SyntaxKind.PropertyAccessExpression,
    // ts.SyntaxKind.ElementAccessExpression,
    // ts.SyntaxKind.CallExpression,
    // ts.SyntaxKind.NewExpression,
    // ts.SyntaxKind.TaggedTemplateExpression,
    // ts.SyntaxKind.TypeAssertionExpression,
    // ts.SyntaxKind.ParenthesizedExpression,
    // ts.SyntaxKind.FunctionExpression,
    // ts.SyntaxKind.ArrowFunction,
    // ts.SyntaxKind.DeleteExpression,
    // ts.SyntaxKind.TypeOfExpression,
    // ts.SyntaxKind.VoidExpression,
    // ts.SyntaxKind.AwaitExpression,
    // ts.SyntaxKind.PrefixUnaryExpression,
    // ts.SyntaxKind.PostfixUnaryExpression,
    // ts.SyntaxKind.BinaryExpression,
    // ts.SyntaxKind.ConditionalExpression,
    // ts.SyntaxKind.TemplateExpression,
    // ts.SyntaxKind.YieldExpression,
    // ts.SyntaxKind.SpreadElement,
    // ts.SyntaxKind.ClassExpression,
    // ts.SyntaxKind.OmittedExpression,
    // ts.SyntaxKind.ExpressionWithTypeArguments,
    // ts.SyntaxKind.AsExpression,
    // ts.SyntaxKind.NonNullExpression,
    ts.SyntaxKind.MetaProperty,
    // ts.SyntaxKind.SyntheticExpression,
    ts.SyntaxKind.TemplateSpan,
    ts.SyntaxKind.SemicolonClassElement,
    // ts.SyntaxKind.Block,
    ts.SyntaxKind.EmptyStatement,
    // ts.SyntaxKind.VariableStatement,
    // ts.SyntaxKind.ExpressionStatement,
    // ts.SyntaxKind.IfStatement,
    // ts.SyntaxKind.DoStatement,
    // ts.SyntaxKind.WhileStatement,
    // ts.SyntaxKind.ForStatement,
    // ts.SyntaxKind.ForInStatement,
    // ts.SyntaxKind.ForOfStatement,
    // ts.SyntaxKind.ContinueStatement,
    // ts.SyntaxKind.BreakStatement,
    // ts.SyntaxKind.ReturnStatement,
    // ts.SyntaxKind.WithStatement,
    // ts.SyntaxKind.SwitchStatement,
    // ts.SyntaxKind.LabeledStatement,
    // ts.SyntaxKind.ThrowStatement,
    // ts.SyntaxKind.TryStatement,
    // ts.SyntaxKind.DebuggerStatement,
    // ts.SyntaxKind.VariableDeclaration,
    // ts.SyntaxKind.VariableDeclarationList,
    // ts.SyntaxKind.FunctionDeclaration,
    // ts.SyntaxKind.ClassDeclaration,
    // ts.SyntaxKind.InterfaceDeclaration,
    // ts.SyntaxKind.TypeAliasDeclaration,
    // ts.SyntaxKind.EnumDeclaration,
    // ts.SyntaxKind.ModuleDeclaration,
    // ts.SyntaxKind.ModuleBlock,
    // ts.SyntaxKind.CaseBlock,
    ts.SyntaxKind.NamespaceExportDeclaration,
    ts.SyntaxKind.ImportEqualsDeclaration,
    ts.SyntaxKind.ImportDeclaration,
    ts.SyntaxKind.ImportClause,
    ts.SyntaxKind.NamespaceImport,
    ts.SyntaxKind.NamedImports,
    ts.SyntaxKind.ImportSpecifier,
    ts.SyntaxKind.ExportAssignment,
    ts.SyntaxKind.ExportDeclaration,
    ts.SyntaxKind.NamedExports,
    ts.SyntaxKind.ExportSpecifier,
    ts.SyntaxKind.MissingDeclaration,
    ts.SyntaxKind.ExternalModuleReference,
    ts.SyntaxKind.JsxElement,
    ts.SyntaxKind.JsxSelfClosingElement,
    ts.SyntaxKind.JsxOpeningElement,
    ts.SyntaxKind.JsxClosingElement,
    ts.SyntaxKind.JsxFragment,
    ts.SyntaxKind.JsxOpeningFragment,
    ts.SyntaxKind.JsxClosingFragment,
    ts.SyntaxKind.JsxAttribute,
    ts.SyntaxKind.JsxAttributes,
    ts.SyntaxKind.JsxSpreadAttribute,
    // ts.SyntaxKind.JsxExpression,
    // ts.SyntaxKind.CaseClause,
    // ts.SyntaxKind.DefaultClause,
    // ts.SyntaxKind.HeritageClause,
    // ts.SyntaxKind.CatchClause,
    ts.SyntaxKind.PropertyAssignment,
    ts.SyntaxKind.ShorthandPropertyAssignment,
    ts.SyntaxKind.SpreadAssignment,
    ts.SyntaxKind.EnumMember,
    ts.SyntaxKind.UnparsedPrologue,
    ts.SyntaxKind.UnparsedPrepend,
    ts.SyntaxKind.UnparsedText,
    ts.SyntaxKind.UnparsedInternalText,
    ts.SyntaxKind.UnparsedSyntheticReference,
    ts.SyntaxKind.SourceFile,
    ts.SyntaxKind.Bundle,
    ts.SyntaxKind.UnparsedSource,
    ts.SyntaxKind.InputFiles,
    ts.SyntaxKind.JSDocTypeExpression,
    ts.SyntaxKind.JSDocAllType,
    ts.SyntaxKind.JSDocUnknownType,
    ts.SyntaxKind.JSDocNullableType,
    ts.SyntaxKind.JSDocNonNullableType,
    ts.SyntaxKind.JSDocOptionalType,
    ts.SyntaxKind.JSDocFunctionType,
    ts.SyntaxKind.JSDocVariadicType,
    ts.SyntaxKind.JSDocNamepathType,
    ts.SyntaxKind.JSDocComment,
    ts.SyntaxKind.JSDocTypeLiteral,
    ts.SyntaxKind.JSDocSignature,
    ts.SyntaxKind.JSDocTag,
    ts.SyntaxKind.JSDocAugmentsTag,
    ts.SyntaxKind.JSDocAuthorTag,
    ts.SyntaxKind.JSDocClassTag,
    ts.SyntaxKind.JSDocCallbackTag,
    ts.SyntaxKind.JSDocEnumTag,
    ts.SyntaxKind.JSDocParameterTag,
    ts.SyntaxKind.JSDocReturnTag,
    ts.SyntaxKind.JSDocThisTag,
    ts.SyntaxKind.JSDocTypeTag,
    ts.SyntaxKind.JSDocTemplateTag,
    ts.SyntaxKind.JSDocTypedefTag,
    ts.SyntaxKind.JSDocPropertyTag,
    // ts.SyntaxKind.SyntaxList,
    ts.SyntaxKind.NotEmittedStatement,
    // ts.SyntaxKind.PartiallyEmittedExpression,
    // ts.SyntaxKind.CommaListExpression,
    ts.SyntaxKind.MergeDeclarationMarker,
    ts.SyntaxKind.EndOfDeclarationMarker,
    // ts.SyntaxKind.SyntheticReferenceExpression,
    // ts.SyntaxKind.Count,
    ts.SyntaxKind.FirstAssignment,
    ts.SyntaxKind.LastAssignment,
    ts.SyntaxKind.FirstCompoundAssignment,
    ts.SyntaxKind.LastCompoundAssignment,
    ts.SyntaxKind.FirstReservedWord,
    ts.SyntaxKind.LastReservedWord,
    ts.SyntaxKind.FirstKeyword,
    ts.SyntaxKind.LastKeyword,
    ts.SyntaxKind.FirstFutureReservedWord,
    ts.SyntaxKind.LastFutureReservedWord,
    // ts.SyntaxKind.FirstTypeNode,
    // ts.SyntaxKind.LastTypeNode,
    ts.SyntaxKind.FirstPunctuation,
    ts.SyntaxKind.LastPunctuation,
    ts.SyntaxKind.FirstToken,
    ts.SyntaxKind.LastToken,
    ts.SyntaxKind.FirstTriviaToken,
    ts.SyntaxKind.LastTriviaToken,
    ts.SyntaxKind.FirstLiteralToken,
    ts.SyntaxKind.LastLiteralToken,
    ts.SyntaxKind.FirstTemplateToken,
    ts.SyntaxKind.LastTemplateToken,
    ts.SyntaxKind.FirstBinaryOperator,
    ts.SyntaxKind.LastBinaryOperator,
    // ts.SyntaxKind.FirstStatement,
    // ts.SyntaxKind.LastStatement,
    // ts.SyntaxKind.FirstNode,
    ts.SyntaxKind.FirstJSDocNode,
    ts.SyntaxKind.LastJSDocNode,
    ts.SyntaxKind.FirstJSDocTagNode,
    ts.SyntaxKind.LastJSDocTagNode,
];
exports.ignoreLocalBlacklist = exports.namespaceBlacklist.filter(function (kind) { return kind !== ts.SyntaxKind.Identifier; });
//# sourceMappingURL=blacklists.js.map