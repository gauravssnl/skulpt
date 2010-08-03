/* File automatically generated by asdl_js.py. */

/**
 * Enumeration for expr_context.
 * @const
 * @enum {number}
 */
var expr_context_ty = { Load:1, Store:2, Del:3, AugLoad:4, AugStore:5, Param:6
                        };

/**
 * Enumeration for boolop.
 * @const
 * @enum {number}
 */
var boolop_ty = { And:1, Or:2 };

/**
 * Enumeration for operator.
 * @const
 * @enum {number}
 */
var operator_ty = { Add:1, Sub:2, Mult:3, Div:4, Mod:5, Pow:6, LShift:7,
                    RShift:8, BitOr:9, BitXor:10, BitAnd:11, FloorDiv:12 };

/**
 * Enumeration for unaryop.
 * @const
 * @enum {number}
 */
var unaryop_ty = { Invert:1, Not:2, UAdd:3, USub:4 };

/**
 * Enumeration for cmpop.
 * @const
 * @enum {number}
 */
var cmpop_ty = { Eq:1, NotEq:2, Lt:3, LtE:4, Gt:5, GtE:6, Is:7, IsNot:8, _In:9,
                 NotIn:10 };


/**
 * Enumeration for mod kinds.
 * @const
 * @enum {number}
 */
var mod_kind = {Module_kind:1, Interactive_kind:2, Expression_kind:3,
                 Suite_kind:4};

/**
 * Enumeration for stmt kinds.
 * @const
 * @enum {number}
 */
var stmt_kind = {FunctionDef_kind:1, ClassDef_kind:2, _Return_kind:3,
                  _Delete_kind:4, Assign_kind:5, AugAssign_kind:6,
                  Print_kind:7, _For_kind:8, _While_kind:9, _If_kind:10,
                  _With_kind:11, Raise_kind:12, TryExcept_kind:13,
                  TryFinally_kind:14, Assert_kind:15, _Import_kind:16,
                  ImportFrom_kind:17, Exec_kind:18, Global_kind:19,
                  Expr_kind:20, Pass_kind:21, _Break_kind:22,
                  _Continue_kind:23};

/**
 * Enumeration for expr kinds.
 * @const
 * @enum {number}
 */
var expr_kind = {BoolOp_kind:1, BinOp_kind:2, UnaryOp_kind:3, Lambda_kind:4,
                  IfExp_kind:5, Dict_kind:6, ListComp_kind:7,
                  GeneratorExp_kind:8, Yield_kind:9, Compare_kind:10,
                  Call_kind:11, Repr_kind:12, Num_kind:13, Str_kind:14,
                  Attribute_kind:15, Subscript_kind:16, Name_kind:17,
                  List_kind:18, Tuple_kind:19};

/**
 * Enumeration for slice kinds.
 * @const
 * @enum {number}
 */
var slice_kind = {Ellipsis_kind:1, Slice_kind:2, ExtSlice_kind:3, Index_kind:4};

/**
 * Enumeration for excepthandler kinds.
 * @const
 * @enum {number}
 */
var excepthandler_kind = {ExceptHandler_kind:1};







/* ---------------------- */
/* constructors for nodes */
/* ---------------------- */





function Module(/* {asdl_seq *} */ body)
{
    var p = {};
    p.kind = Module_kind;
    p.body = body;
    return p;
}

function Interactive(/* {asdl_seq *} */ body)
{
    var p = {};
    p.kind = Interactive_kind;
    p.body = body;
    return p;
}

function Expression(/* {expr_ty} */ body)
{
    goog.asserts.assert(body);
    var p = {};
    p.kind = Expression_kind;
    p.body = body;
    return p;
}

function Suite(/* {asdl_seq *} */ body)
{
    var p = {};
    p.kind = Suite_kind;
    p.body = body;
    return p;
}

function FunctionDef(/* {identifier} */ name, /* {_arguments_ty} */ args, /*
                          {asdl_seq *} */ body, /* {asdl_seq *} */
                          decorator_list, /* {int} */ lineno, /* {int} */
                          col_offset)
{
    goog.asserts.assert(name);
    goog.asserts.assert(args);
    var p = {};
    p.kind = FunctionDef_kind;
    p.name = name;
    p.args = args;
    p.body = body;
    p.decorator_list = decorator_list;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function ClassDef(/* {identifier} */ name, /* {asdl_seq *} */ bases, /*
                       {asdl_seq *} */ body, /* {asdl_seq *} */ decorator_list,
                       /* {int} */ lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(name);
    var p = {};
    p.kind = ClassDef_kind;
    p.name = name;
    p.bases = bases;
    p.body = body;
    p.decorator_list = decorator_list;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function _Return(/* {expr_ty} */ value, /* {int} */ lineno, /* {int} */
                      col_offset)
{
    var p = {};
    p.kind = _Return_kind;
    p.value = value;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function _Delete(/* {asdl_seq *} */ targets, /* {int} */ lineno, /* {int} */
                      col_offset)
{
    var p = {};
    p.kind = _Delete_kind;
    p.targets = targets;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function Assign(/* {asdl_seq *} */ targets, /* {expr_ty} */ value, /* {int} */
                     lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(value);
    var p = {};
    p.kind = Assign_kind;
    p.targets = targets;
    p.value = value;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function AugAssign(/* {expr_ty} */ target, /* {operator_ty} */ op, /* {expr_ty}
                        */ value, /* {int} */ lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(target);
    goog.asserts.assert(op);
    goog.asserts.assert(value);
    var p = {};
    p.kind = AugAssign_kind;
    p.target = target;
    p.op = op;
    p.value = value;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function Print(/* {expr_ty} */ dest, /* {asdl_seq *} */ values, /* {bool} */
                    nl, /* {int} */ lineno, /* {int} */ col_offset)
{
    var p = {};
    p.kind = Print_kind;
    p.dest = dest;
    p.values = values;
    p.nl = nl;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function _For(/* {expr_ty} */ target, /* {expr_ty} */ iter, /* {asdl_seq *} */
                   body, /* {asdl_seq *} */ orelse, /* {int} */ lineno, /*
                   {int} */ col_offset)
{
    goog.asserts.assert(target);
    goog.asserts.assert(iter);
    var p = {};
    p.kind = _For_kind;
    p.target = target;
    p.iter = iter;
    p.body = body;
    p.orelse = orelse;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function _While(/* {expr_ty} */ test, /* {asdl_seq *} */ body, /* {asdl_seq *}
                     */ orelse, /* {int} */ lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(test);
    var p = {};
    p.kind = _While_kind;
    p.test = test;
    p.body = body;
    p.orelse = orelse;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function _If(/* {expr_ty} */ test, /* {asdl_seq *} */ body, /* {asdl_seq *} */
                  orelse, /* {int} */ lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(test);
    var p = {};
    p.kind = _If_kind;
    p.test = test;
    p.body = body;
    p.orelse = orelse;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function _With(/* {expr_ty} */ context_expr, /* {expr_ty} */ optional_vars, /*
                    {asdl_seq *} */ body, /* {int} */ lineno, /* {int} */
                    col_offset)
{
    goog.asserts.assert(context_expr);
    var p = {};
    p.kind = _With_kind;
    p.context_expr = context_expr;
    p.optional_vars = optional_vars;
    p.body = body;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function Raise(/* {expr_ty} */ type, /* {expr_ty} */ inst, /* {expr_ty} */
                    tback, /* {int} */ lineno, /* {int} */ col_offset)
{
    var p = {};
    p.kind = Raise_kind;
    p.type = type;
    p.inst = inst;
    p.tback = tback;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function TryExcept(/* {asdl_seq *} */ body, /* {asdl_seq *} */ handlers, /*
                        {asdl_seq *} */ orelse, /* {int} */ lineno, /* {int} */
                        col_offset)
{
    var p = {};
    p.kind = TryExcept_kind;
    p.body = body;
    p.handlers = handlers;
    p.orelse = orelse;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function TryFinally(/* {asdl_seq *} */ body, /* {asdl_seq *} */ finalbody, /*
                         {int} */ lineno, /* {int} */ col_offset)
{
    var p = {};
    p.kind = TryFinally_kind;
    p.body = body;
    p.finalbody = finalbody;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function Assert(/* {expr_ty} */ test, /* {expr_ty} */ msg, /* {int} */ lineno,
                     /* {int} */ col_offset)
{
    goog.asserts.assert(test);
    var p = {};
    p.kind = Assert_kind;
    p.test = test;
    p.msg = msg;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function _Import(/* {asdl_seq *} */ names, /* {int} */ lineno, /* {int} */
                      col_offset)
{
    var p = {};
    p.kind = _Import_kind;
    p.names = names;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function ImportFrom(/* {identifier} */ module, /* {asdl_seq *} */ names, /*
                         {int} */ level, /* {int} */ lineno, /* {int} */
                         col_offset)
{
    goog.asserts.assert(module);
    var p = {};
    p.kind = ImportFrom_kind;
    p.module = module;
    p.names = names;
    p.level = level;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function Exec(/* {expr_ty} */ body, /* {expr_ty} */ globals, /* {expr_ty} */
                   locals, /* {int} */ lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(body);
    var p = {};
    p.kind = Exec_kind;
    p.body = body;
    p.globals = globals;
    p.locals = locals;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function Global(/* {asdl_seq *} */ names, /* {int} */ lineno, /* {int} */
                     col_offset)
{
    var p = {};
    p.kind = Global_kind;
    p.names = names;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function Expr(/* {expr_ty} */ value, /* {int} */ lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(value);
    var p = {};
    p.kind = Expr_kind;
    p.value = value;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function Pass(/* {int} */ lineno, /* {int} */ col_offset)
{
    var p = {};
    p.kind = Pass_kind;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function _Break(/* {int} */ lineno, /* {int} */ col_offset)
{
    var p = {};
    p.kind = _Break_kind;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function _Continue(/* {int} */ lineno, /* {int} */ col_offset)
{
    var p = {};
    p.kind = _Continue_kind;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function BoolOp(/* {boolop_ty} */ op, /* {asdl_seq *} */ values, /* {int} */
                     lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(op);
    var p = {};
    p.kind = BoolOp_kind;
    p.op = op;
    p.values = values;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function BinOp(/* {expr_ty} */ left, /* {operator_ty} */ op, /* {expr_ty} */
                    right, /* {int} */ lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(left);
    goog.asserts.assert(op);
    goog.asserts.assert(right);
    var p = {};
    p.kind = BinOp_kind;
    p.left = left;
    p.op = op;
    p.right = right;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function UnaryOp(/* {unaryop_ty} */ op, /* {expr_ty} */ operand, /* {int} */
                      lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(op);
    goog.asserts.assert(operand);
    var p = {};
    p.kind = UnaryOp_kind;
    p.op = op;
    p.operand = operand;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function Lambda(/* {_arguments_ty} */ args, /* {expr_ty} */ body, /* {int} */
                     lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(args);
    goog.asserts.assert(body);
    var p = {};
    p.kind = Lambda_kind;
    p.args = args;
    p.body = body;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function IfExp(/* {expr_ty} */ test, /* {expr_ty} */ body, /* {expr_ty} */
                    orelse, /* {int} */ lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(test);
    goog.asserts.assert(body);
    goog.asserts.assert(orelse);
    var p = {};
    p.kind = IfExp_kind;
    p.test = test;
    p.body = body;
    p.orelse = orelse;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function Dict(/* {asdl_seq *} */ keys, /* {asdl_seq *} */ values, /* {int} */
                   lineno, /* {int} */ col_offset)
{
    var p = {};
    p.kind = Dict_kind;
    p.keys = keys;
    p.values = values;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function ListComp(/* {expr_ty} */ elt, /* {asdl_seq *} */ generators, /* {int}
                       */ lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(elt);
    var p = {};
    p.kind = ListComp_kind;
    p.elt = elt;
    p.generators = generators;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function GeneratorExp(/* {expr_ty} */ elt, /* {asdl_seq *} */ generators, /*
                           {int} */ lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(elt);
    var p = {};
    p.kind = GeneratorExp_kind;
    p.elt = elt;
    p.generators = generators;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function Yield(/* {expr_ty} */ value, /* {int} */ lineno, /* {int} */
                    col_offset)
{
    var p = {};
    p.kind = Yield_kind;
    p.value = value;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function Compare(/* {expr_ty} */ left, /* {asdl_int_seq *} */ ops, /* {asdl_seq
                      *} */ comparators, /* {int} */ lineno, /* {int} */
                      col_offset)
{
    goog.asserts.assert(left);
    var p = {};
    p.kind = Compare_kind;
    p.left = left;
    p.ops = ops;
    p.comparators = comparators;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function Call(/* {expr_ty} */ func, /* {asdl_seq *} */ args, /* {asdl_seq *} */
                   keywords, /* {expr_ty} */ starargs, /* {expr_ty} */ kwargs,
                   /* {int} */ lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(func);
    var p = {};
    p.kind = Call_kind;
    p.func = func;
    p.args = args;
    p.keywords = keywords;
    p.starargs = starargs;
    p.kwargs = kwargs;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function Repr(/* {expr_ty} */ value, /* {int} */ lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(value);
    var p = {};
    p.kind = Repr_kind;
    p.value = value;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function Num(/* {object} */ n, /* {int} */ lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(n);
    var p = {};
    p.kind = Num_kind;
    p.n = n;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function Str(/* {string} */ s, /* {int} */ lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(s);
    var p = {};
    p.kind = Str_kind;
    p.s = s;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function Attribute(/* {expr_ty} */ value, /* {identifier} */ attr, /*
                        {expr_context_ty} */ ctx, /* {int} */ lineno, /* {int}
                        */ col_offset)
{
    goog.asserts.assert(value);
    goog.asserts.assert(attr);
    goog.asserts.assert(ctx);
    var p = {};
    p.kind = Attribute_kind;
    p.value = value;
    p.attr = attr;
    p.ctx = ctx;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function Subscript(/* {expr_ty} */ value, /* {slice_ty} */ slice, /*
                        {expr_context_ty} */ ctx, /* {int} */ lineno, /* {int}
                        */ col_offset)
{
    goog.asserts.assert(value);
    goog.asserts.assert(slice);
    goog.asserts.assert(ctx);
    var p = {};
    p.kind = Subscript_kind;
    p.value = value;
    p.slice = slice;
    p.ctx = ctx;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function Name(/* {identifier} */ id, /* {expr_context_ty} */ ctx, /* {int} */
                   lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(id);
    goog.asserts.assert(ctx);
    var p = {};
    p.kind = Name_kind;
    p.id = id;
    p.ctx = ctx;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function List(/* {asdl_seq *} */ elts, /* {expr_context_ty} */ ctx, /* {int} */
                   lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(ctx);
    var p = {};
    p.kind = List_kind;
    p.elts = elts;
    p.ctx = ctx;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function Tuple(/* {asdl_seq *} */ elts, /* {expr_context_ty} */ ctx, /* {int}
                    */ lineno, /* {int} */ col_offset)
{
    goog.asserts.assert(ctx);
    var p = {};
    p.kind = Tuple_kind;
    p.elts = elts;
    p.ctx = ctx;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function Ellipsis()
{
    var p = {};
    p.kind = Ellipsis_kind;
    return p;
}

function Slice(/* {expr_ty} */ lower, /* {expr_ty} */ upper, /* {expr_ty} */
                    step)
{
    var p = {};
    p.kind = Slice_kind;
    p.lower = lower;
    p.upper = upper;
    p.step = step;
    return p;
}

function ExtSlice(/* {asdl_seq *} */ dims)
{
    var p = {};
    p.kind = ExtSlice_kind;
    p.dims = dims;
    return p;
}

function Index(/* {expr_ty} */ value)
{
    goog.asserts.assert(value);
    var p = {};
    p.kind = Index_kind;
    p.value = value;
    return p;
}

function comprehension(/* {expr_ty} */ target, /* {expr_ty} */ iter, /*
                            {asdl_seq *} */ ifs)
{
    goog.asserts.assert(target);
    goog.asserts.assert(iter);
    var p = {};
    p.target = target;
    p.iter = iter;
    p.ifs = ifs;
    return p;
}

function ExceptHandler(/* {expr_ty} */ type, /* {expr_ty} */ name, /* {asdl_seq
                            *} */ body, /* {int} */ lineno, /* {int} */
                            col_offset)
{
    var p = {};
    p.kind = ExceptHandler_kind;
    p.type = type;
    p.name = name;
    p.body = body;
    p.lineno = lineno;
    p.col_offset = col_offset;
    return p;
}

function _arguments(/* {asdl_seq *} */ args, /* {identifier} */ vararg, /*
                         {identifier} */ kwarg, /* {asdl_seq *} */ defaults)
{
    var p = {};
    p.args = args;
    p.vararg = vararg;
    p.kwarg = kwarg;
    p.defaults = defaults;
    return p;
}

function keyword(/* {identifier} */ arg, /* {expr_ty} */ value)
{
    goog.asserts.assert(arg);
    goog.asserts.assert(value);
    var p = {};
    p.arg = arg;
    p.value = value;
    return p;
}

function alias(/* {identifier} */ name, /* {identifier} */ asname)
{
    goog.asserts.assert(name);
    var p = {};
    p.name = name;
    p.asname = asname;
    return p;
}

